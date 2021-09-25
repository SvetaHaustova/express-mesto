const jwt = require('jsonwebtoken');
const UnAuthError = require('../errors/unauth-error');

const auth = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnAuthError('Необходима авторизация!');
  }
  const { token } = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    next(new UnAuthError('Необходима авторизация!'));
  }

  req.user = payload;
  next();
};

module.exports = auth;