import {UserInterface} from "./UserInterface";
import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema<UserInterface>({
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
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
}, {timestamps: true});

const  User = mongoose.model<UserInterface>('User', UserSchema);
module.exports = User;
