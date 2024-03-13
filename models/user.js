const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps : true });

const User = mongoose.model('User', userSchema);
module.exports = Blog

function User(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}
