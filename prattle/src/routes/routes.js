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
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
  res.send('send');
});

module.exports = router;
