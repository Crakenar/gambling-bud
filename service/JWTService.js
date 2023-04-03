const jwt = require('jsonwebtoken');


exports.createJWT = async (req, response, user) => {
    try {
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
        return true;
    }catch (e) {
        return response.status(404).json({
            success: false,
            message: 'wrong token or expired'
        });
    }
}

exports.verifyJWT =  (req, res) => {
    try {
        const token = req.headers.token;
        if (token) {
            return jwt.verify(token, process.env.JWT_SECRET);
        }
        return false
    }catch (e) {
        return res.status(404).json({
            success: false,
            message: 'wrong token or expired'
        });
    }
}

exports.clearCookie = async (res) => {
    await res.clearCookie('token');
}
