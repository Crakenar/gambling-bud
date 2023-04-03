const router = require("express").Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const {cookieJwtAuth} = require("../middleware/cookieJwtAuth");
const User = require("../components/users/User");
const bcrypt = require("bcryptjs")
const {createJWT, clearCookie} = require("../service/JWTService");
const saltRounds = 10


router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }), async function (req, res) {
        const user = res.req.user;
        // create jsonwebtoken and return it
        await createJWT(req, res, user);
        res.redirect(process.env.CLIENT_URL);
    }
);

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Successfully Logged In",
            user: req.user,
        });
    } else {
        res.status(403).json({ error: true, message: "Not Authorized" });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
});

router.post("/logout", (req, res, next) => {
    req.logout(async function (err) {
        if (err) {
            return next(err);
        }
        await clearCookie(res);
        return res.json({
            success: true,
            message: 'Token revoked'
        })
    });
});

router.get('/checkToken', cookieJwtAuth, (req, res, next) => {
    return res.json({
        success: true,
        data: req.user,
        message: 'Token valid'
    });
});

router.post('/login',  async (req, response, next) => {
    const {email, password} = req.body;
    const query = User.where({email: email});
    let user = await User.findOne(query);
    if (user === null) {
        return response.status(404).json({
            success: true,
            message: 'No User Found',
        })
    }else {
        bcrypt.compare(password, user.password, async function (err, res) {
            if (res === true) {
                // create jsonwebtoken and return it
                await createJWT(req,response, user).then(res => {
                    return response.status(200).json({
                        success: res,
                        message: 'logged in go to dashboard',
                    });
                });
            } else {
                return response.status(200).json({
                    success: false,
                    message: 'Wrong Credentials',
                });
            }
        });
    }
});
router.post('/register', async (req, res) => {
    res.clearCookie('token');
    const {email, password} = req.body;
    const query = User.where({email: email});
    let user = await User.findOne(query);
    if (user === null) {
        //Hashpassword
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                // Store hash in your password DB.
                // Create new User
                user = new User({
                    email: email,
                    password: hash,
                });
                user.save();
                res.status(200).json({
                    success: true,
                    message: 'User registered => go into dashboard',
                });
            });
        });
    }else {
        res.status(409).json({
            success: false,
            message: 'User already exists u dunky'
        })
    }
});

module.exports = router;
