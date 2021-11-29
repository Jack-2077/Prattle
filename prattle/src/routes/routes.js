const express = require('express');
const router = express.Router();
const signUpTemplate = require('../models/SignUpModels');
const Message = require('../models/MessageModel');

router.post('/signup', (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const signedUpUser = new signUpTemplate({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  });

  signUpTemplate.findOne({ email: email }).then((user) => {
    if (user) {
      console.log('email already exists: ' + user.email);
      res.json({
        bool: 0,
      });
    } else {
      signedUpUser
        .save()
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          res.json(error);
        });
    }
  });
});

router.post('/signin', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  signUpTemplate.findOne({ email: email, password: password }).then((user) => {
    if (user) {
      console.log('Login request found user: ' + user);
      res.json({
        bool: 1, //Send message "1" to show user is found
      });
    } else {
      console.log('User not found!' + user);
      res.json({
        bool: 0, //Send message "0" to show user is NOT found
      });
    }
  });
});

router.post('/messages', (req, res) => {
  const newMessage = new Message({
    message: req.body.message,
    email: req.body.email,
  });

  newMessage
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get('/messages', (req, res) => {
  Message.find({ email: 'Lii@gmail.com' }).then((msg) => {
    if (msg) {
      console.log(msg);
      res.json({
        messageRes: JSON.stringify(msg),
      });
    }
  });
});

router.get('/users', (req, res) => {
  signUpTemplate.find({}).then((users) => {
    let userList = {};

    users.forEach(
      (user) => (userList[user._id] = user.first_name + ' ' + user.last_name)
    );
    res.json({ userList });
  });
});

module.exports = router;
