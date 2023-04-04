const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema({
    name: {
        type: String,
        required: true,
    },
    odds: {
        type: Number,
        required: true,
        default: 1,
        min: 0,
    },
    gains: {
        type: Number,
        required: true,
        default: 1,
        min: 0,
    },
    closingDate: {
        type: Date,
        default: Date.now(),
        min: Date.now()
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started'
    },
    participants: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Gambler'
    }],
}, { timestamps: true });

const GameSchema = mongoose.model('Game', Game);
module.exports = GameSchema;

// https://mongoosejs.com/docs/guide.html#methods
//if needed to link it to another site https://mongoosejs.com/docs/schematypes.html#getters depending on .env variable like for storing images
//can make a custom connection => nice for microservices ?  https://mongoosejs.com/docs/models.html#constructing-documents
//views + might help to seed https://mongoosejs.com/docs/models.html#constructing-documents
