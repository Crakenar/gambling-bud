const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    pseudo: {
        type: String,
        required: false
    },
    name: {
        type: String,
        default: 'Toto',
        required: true
    },
    lastname: {
        type: String,
        default: 'Toto',
        required: true
    },
    pictureLink: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    emailVerifiedAt: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false
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
}, {timestamps: true});

const User = mongoose.model('users', UserSchema);
module.exports = User;
