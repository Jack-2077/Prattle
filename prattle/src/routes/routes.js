const express = require('express');
const router = express.Router();
const signUpTemplate = require('../models/SignUpModels');

router.post('/signup', (req, res) => {
  const signedUpUser = new signUpTemplate({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/signin', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  signUpTemplate.findOne({email:email, password:password})
  .then(user => {
    if(user){
      console.log("Login request found user: " + user);
      res.json({
        bool: 1 //Send message "1" to show user is found
      })
    }else{
      console.log("User not found!" + user);
      res.json({
        bool: 0 //Send message "0" to show user is NOT found
      });
    }
  })
});

module.exports = router;
