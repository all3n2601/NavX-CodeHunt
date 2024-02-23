const jwt = require('jsonwebtoken');

require("dotenv/config");

const jwt_secret = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {

  const token =  req.header('Authorization') || req.cookies.token;

  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied. No token provided.' });
  }

  try {
    // Check if the token starts with "Bearer " and extract the actual token
    const tokenCleaned = token.startsWith('Bearer ') ? token.slice(7) : token;

    const decoded = jwt.verify(tokenCleaned, jwt_secret);

    // Attach the user object to the request for further use in controllers
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ msg: 'Authorization denied. Invalid token.' });
  }
};

module.exports = authenticate;