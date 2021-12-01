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
          res.status(200).json(data);
        })
        .catch((error) => {
          res.status(400).json(error);
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
      res.status(200).json({
        bool: 1, //Send message "1" to show user is found
      });
    } else {
      console.log('User not found!' + user);
      res.json({
        bool: 0, //Send message "0" to show user is NOT found
      });
      res.status(400).json({
        msg: `No user found with the email of ${email} or the password is incorrect`,
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
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.get('/messages', (req, res) => {
  Message.find().then((msg) => {
    if (msg) {
      res.status(200).json({
        messageRes: JSON.stringify(msg),
      });
    } else {
      res.status(400).json({ msg: `No messages found` });
    }
  });
});

router.get('/users', (req, res) => {
  signUpTemplate.find({}).then((users) => {
    if(users){
    let userList = {};

    users.forEach(
      (user) => (userList[user._id] = user.first_name + ' ' + user.last_name)
    );
    res.status(200).json({ userList });
    }else{
      res.status(400).json({msg: "No users found"});
    }
  });
});

router.delete('/messages', (req, res) => {
  let messageID = req.body.id;
  Message.deleteOne({ _id: messageID }).then((msg) => {
    if (msg) {
      res.status(200).json({ message: 'Message deleted' });
    } else {
      res.status(400).json({ msg: `No message with the id of ${messageID}` });
    }
  });
});

module.exports = router;
