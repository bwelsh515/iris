const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/models/user');

const strategy = new LocalStrategy(
  {
    usernameField: 'username', // not necessary, DEFAULT
  },
  (username, password, done) => {
    // Search DB for user
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    });
  },
);

module.exports = strategy;
