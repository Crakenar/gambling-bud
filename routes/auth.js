const router = require("express").Router();
const passport = require("passport");
const {cookieJwtAuth} = require("../middleware/cookieJwtAuth");
const User = require("../components/users/User");
const {createJWT, clearCookie} = require("../service/JWTService");
const {checkPassword, hashPassword} = require("../service/PasswordService");

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

router.get('/checkToken', cookieJwtAuth, (req, res) => {
    return res.json({
        success: true,
        data: req.user,
        message: 'Token valid'
    });
});

router.post('/login',  async (req, response) => {
    const {email, password} = req.body;
    const query = User.where({email: email});
    let user = await User.findOne(query);
    if (user === null) {
        return response.status(404).json({
            success: true,
            message: 'No User Found',
        })
    }else {
        let passwordCorrect = checkPassword(password, user.password);
        if (passwordCorrect === true) {
            await createJWT(req, response, user).then(res => {
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
        // await checkPassword(password, user.password).then(async res => {
        //     console.log('ici', res);
        //     if (res === true) {
        //         // create jsonwebtoken and return it
        //         await createJWT(req, response, user).then(res => {
        //             return response.status(200).json({
        //                 success: res,
        //                 message: 'logged in go to dashboard',
        //             });
        //         });
        //     } else {
        //         return response.status(200).json({
        //             success: false,
        //             message: 'Wrong Credentials',
        //         });
        //     }
        // });

    }
});
router.post('/register', async (req, response) => {
    response.clearCookie('token');
    const {email, password} = req.body;
    const query = User.where({email: email});
    let user = await User.findOne(query);
    if (user === null) {
        //Hashpassword
        await hashPassword(password).then(hashPassword => {
            if (hashPassword !== null) {
                user = new User({
                    email: email,
                    password: hashPassword,
                });
                user.save();
                response.status(200).json({
                    success: true,
                    message: 'User registered => go into dashboard',
                });
            }else {
                response.status(500).json({
                    success: false,
                    message: 'Password not hashed contact administrator'
                })
            }
        }).catch(e => {
            console.log('Error while bcrypt password', e);
            response.status(500).json({
                success: false,
                message: 'Error while bcrypt password'
            })
        });
    }else {
        response.status(409).json({
            success: false,
            message: 'User already exists u dunky'
        })
    }
});

module.exports = router;
