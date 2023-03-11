const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import User from "../users/User";

const Gamble = new Schema({
    name: {
        type: String,
        required: true
    },
    odds: {
        type: Number,
        required: true,
        default: 1
    },
    gains: {
        type: Number,
        required: true,
        default: 1
    },
    participant: {
        type: User
    }
});

const GambleSchema = mongoose.model('gambles', Gamble);
module.exports = GambleSchema;
