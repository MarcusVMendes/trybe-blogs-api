const jwt = require('jsonwebtoken');

const API_SECRET = 'asd21asd321as32d1asd54asd545';

const JWT_CONFIG = {
  expiresIn: 3600,
  algorithm: 'HS256',
};

const createToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { email } = decoded.data;
    return email;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  createToken,
  verifyToken,
};
