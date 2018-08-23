const express = require('express');
const passport = require('../passport');

const router = express.Router();
const User = require('../db/models/user');

// POST - Sign Up User
router.post('/register', (req, res) => {
  console.log('user signup');

  const {
    name, username, email, password,
  } = req.body;
  // ADD VALIDATION
  User.findOne({ username }, (err, user) => {
    if (err) {
      console.log('User.js post error: ', err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
    } else {
      const newUser = new User({
        name,
        username,
        email,
        password,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

// POST - Login User
router.post(
  '/login',
  (req, res, next) => {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body);
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
      name: req.user.name,
      username: req.user.username,
      email: req.user.email,
    };
    res.send(userInfo);
  },
);

// GET  - User
router.get('/', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

// POST - Logout User
router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: 'logging out' });
  } else {
    res.send({ msg: 'no user to log out' });
  }
});

module.exports = router;
