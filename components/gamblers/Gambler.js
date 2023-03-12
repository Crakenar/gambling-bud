const mongoose = require('mongoose');

const GamblersSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    balance: {
        type: Number,
        min: 0
    },
    status: {
        type: String,
        enum: ['Beginner', 'Learner', 'Committed', 'Accomplished', 'Hedonist', 'Game-Addict'],
    },
    games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    }],
}, {timestamps: true});

module.exports = mongoose.model('Gambler', GamblersSchema);
