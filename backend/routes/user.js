const express = require('express');
const passport = require('../passport');

const router = express.Router();
const User = require('../db/models/user');
const bodyParser = require('body-parser');

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
        entries: [],
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

// Add User Entry
router.post('/id/entry', (req, res) => {
  console.log('add entry');

  const { username, entries } = req.body;
  console.log(req.body);
  // ADD VALIDATION
  User.findOneAndUpdate({ username }, { $push: { entries } }, (err, user) => {
    if (err) {
      console.log('Error adding new entry: ', err);
      return res.send(err);
    }
    console.log('Success ', user);
    return res.send('200', entries);
  });

  // User.findOneAndUpdate({ username }, entries, { upsert: true }, (err, user) => {
  //   if (err) {
  //     console.log('Error Adding new entry: ', err);
  //   }
  //   return res.send('succesfully saved');
  // });
});

// Get User Entries
router.get('/id/entry', (req, res) => {
  console.log('Get User Entries');
  // console.log(req.query);

  const { username } = req.query;
  // console.log(username);

  User.findOne({ username }, (err, user) => {
    // console.log(user);
    if (err) {
      console.log('User.js get error: ', err);
    } else if (user) {
      console.log(user.entries);
      res.json({
        entries: user.entries,
      });
    }
  });
});

module.exports = router;
