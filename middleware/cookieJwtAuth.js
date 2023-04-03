const jwt = require('jsonwebtoken');
const User = require("../components/users/User");
const {verifyJWT} = require("../service/JWTService");
const {response} = require("express");

exports.cookieJwtAuth = async (req, res, next) => {
    try {
        const resJWT  = verifyJWT(req, res);
        if (res !== false && res !== undefined && res !== 'undefined') {
            const query = User.where({email: resJWT.email});
            let user = await User.findOne(query);
            if (user === null) {
                throw new Error('No User Found gtfo')
            }
            req.user = user;
            next();
        }else {
            // console.log('need to send false to frontend');
        }

        // res.status(401).json({
        //     success: false,
        //     message: 'wrong token or expired'
        // })
    } catch (e) {
        return res.json({
            success: false,
            message: 'wrong token or expired'
        })
    }
};
