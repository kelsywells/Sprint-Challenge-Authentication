const bcrypt = require('bcryptjs');

if (req.session && req.session.user) {
  next();
} else {
  res.status(401).json({ message: 'Invalid Credentials' });
}

module.exports = (req, res, next) => {
  res.status(401).json({ you: 'shall not pass!' });
};
