const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  last_name: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true, maxlength: 100 },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', UsersSchema);
