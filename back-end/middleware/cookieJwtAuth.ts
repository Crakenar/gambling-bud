import {NextFunction, Request, Response} from "express";
import {UserRequestInterface} from "../components/users/UserRequestInterface";

export{}
const jwt = require('jsonwebtoken');
const User = require("../components/users/User");

exports.cookieJwtAuth = async (req: UserRequestInterface, res: Response, next: NextFunction) => {
    let token = req.headers.token; //cookie token from front end
    try {
        const userJWT = jwt.verify(token, process.env.JWT_SECRET);
        const query = User.where({email: userJWT.email});
        let user = await User.findOne(query);
        if (user === null){
            throw new Error('No User Found gtfo')
        }
        req.user = user;
        next();
    } catch (e) {
        return res.json({
            success: false,
            message: 'wrong token or expired'
        })
    }
};
