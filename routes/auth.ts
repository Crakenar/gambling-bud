import {UserRequestInterface, UserResponseInterface} from "../components/users/UserRequestInterface";
import {Request, Response} from 'express';
import {UserInterface} from "../components/users/UserInterface";
import {IUser} from "../components/users/User";
const router = require("express").Router();
const passport = require("passport");
const {cookieJwtAuth} = require("../middleware/cookieJwtAuth");
const User = require("../components/users/User");
const {createJWT, clearCookie} = require("../service/JWTService");
const {checkPassword, hashPassword} = require("../service/PasswordService");
const {logout} = require("passport/lib/http/request");

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }), async function (req: UserRequestInterface, res: Response) {
        const user = req.user;
        // create jsonwebtoken and return it
        await createJWT(req, res, user);
        res.redirect(process.env.CLIENT_URL || '/');
    }
);

router.get("/login/success", (req: UserRequestInterface, res: Response) => {
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

router.get("/login/failed", (req: Request, res: Response) => {
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
});

router.post("/logout", async (req: UserRequestInterface, res: Response) => {
    // req.logout(async function (err) {
    //     if (err) {
    //         return res.json({
    //             success: false,
    //             message: 'Error logout'
    //         })
    //     }
    //     await clearCookie(res);
    //     return res.json({
    //         success: true,
    //         message: 'Token revoked'
    //     })
    // });
    delete req.user
    await clearCookie(res);
    return res.json({
        success: true,
        message: 'Token revoked'
    })
});

router.get('/checkToken', cookieJwtAuth, (req: UserRequestInterface, res: Response) => {
    return res.json({
        success: true,
        data: req.user,
        message: 'Token valid'
    });
});

router.post('/login',  async (req: Request, response: Response) => {
    const {email, password} = req.body;
    const query = User.where({email: email});
    let user = await User.findOne(query) as IUser;
    if (user === null) {
        return response.status(404).json({
            success: true,
            message: 'No User Found',
        })
    }else {
        const isPasswordCorrect = await checkPassword(password, user.password);
        if (isPasswordCorrect === true) {
            await createJWT(req, response, user).then((res: boolean) => {
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

    }
});
router.post('/register', async (req: Request, response: Response) => {
    response.clearCookie('token');
    const {email, password} = req.body;
    const query = User.where({email: email});
    let user = await User.findOne(query);
    if (user === null) {
       const passwordHashed = await hashPassword(password);
        if (hashPassword !== null) {
            user = new User({
                email: email,
                password: passwordHashed,
            });
            user.save();
            response.status(200).json({
                success: true,
                message: 'User registered => notif',
            });
        }else {
            response.status(500).json({
                success: false,
                message: 'Password not hashed contact administrator'
            })
        }
    }else {
        response.status(409).json({
            success: false,
            message: 'User already exists u dunky'
        })
    }
});

module.exports = router;
