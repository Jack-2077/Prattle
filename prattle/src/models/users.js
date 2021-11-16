let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UsersSchema = new Schema(
    {
        first_name: {type: String, required: true, maxlength: 100},
        last_name: {type: String, required: true, maxlength: 100},
        email: {type: String, required: true, maxlength: 100},
        password: {type: String, required: true}
    }
)

module.exports = mongoose.model('Users', UsersSchema);