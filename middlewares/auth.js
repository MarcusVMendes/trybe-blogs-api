const { verifyToken } = require('../utils/token');

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'missing auth token' });
    const user = verifyToken(authorization);
    if (!user) return res.status(401).json({ message: 'jwt malformed' });
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  auth,
};