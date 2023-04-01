const router = require("express").Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const {cookieJwtAuth} = require("../middleware/cookieJwtAuth");
const User = require("../components/users/User");


router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }), function (req, res) {
        const user = res.req.user;
        console.log(user)
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
})

module.exports = router;
