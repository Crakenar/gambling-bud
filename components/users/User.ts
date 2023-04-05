import {UserInterface} from "./UserInterface";
const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    pseudo: {
        type: String,
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
    password: {
        type: String,
        required: false
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

const User = model('users', UserSchema);
module.exports = User;

