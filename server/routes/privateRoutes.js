const jwt = require('jsonwebtoken');

exports.verify = (req, res, next) => {
  const token = req.header('auth-token');
  if(!token) res.status(401).send('Access Denied');

  try {
    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verify;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
}
