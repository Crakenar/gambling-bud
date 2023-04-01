const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
  let token = req.headers.token; //cookie token from front end
  try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
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
