const router = require("express").Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const {cookieJwtAuth} = require("../middleware/cookieJwtAuth");
const User = require("../components/users/User");
const bcrypt = require("bcryptjs")
const saltRounds = 10


router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }), function (req, res) {
        const user = res.req.user;
        // create jsonwebtoken and return it
        const token = jwt.sign(
            user.toJSON(), //needed bc of mongoose
            process.env.JWT_SECRET, // get the secret from default.json to hash jsonwebtoken
            { expiresIn: process.env.JWT_EXPIRE_TIME_MINS });
        res.cookie("token", token, {
            // httpOnly: true,
            // secure: true,
            // maxAge: 1000000,
            // signed: true
        });
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
    req.logout(function(err) {
        if (err) { return next(err); }
        res.clearCookie('token');
        return res.json({
            success: true,
            message: 'Token revoked'
        })
    });
});

router.get('/checkToken', cookieJwtAuth, (req, res, next) => {
    res.json({
        success: true,
        data: req.user,
        message: 'Token valid'
    });
    // const { token } = req.headers
    // console.log('token', token);
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
                const token = jwt.sign(
                    user.toJSON(),
                    process.env.JWT_SECRET, // get the secret from default.json to hash jsonwebtoken
                    {expiresIn: process.env.JWT_EXPIRE_TIME_MINS});
                await response.cookie("token", token, {
                    httpOnly: false,
                    // secure: true,
                    // maxAge: 1000000,
                    // signed: true
                });
                // res.redirect(process.env.CLIENT_URL);
                response.status(200).json({
                    success: true,
                    message: 'User loggedin => go into dashboard',
                    token: token
                });
                response.end();
            } else {
                response.status(200).json({
                    success: true,
                    message: 'Wrong Credentials',
                });
                response.end();
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
                    // token: token
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
