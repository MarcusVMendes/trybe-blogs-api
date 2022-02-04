const jwt = require('jsonwebtoken');
require('dotenv').config();

const { API_SECRET } = process.env;

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
