const jwt = require('jsonwebtoken');
const User = require("../components/users/User");

exports.cookieJwtAuth = async (req, res, next) => {
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
        res.clearCookie('token');
        return res.json({
            success: false,
            message: 'wrong token or expired'
        })
        // return res.redirect('/');
    }
};
