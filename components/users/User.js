const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    income: {
        type: Number,
        required: true,
        default: 1
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
