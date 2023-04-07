import {UserInterface} from "./UserInterface";
import mongoose, { Schema } from 'mongoose';
// export interface IUser extends mongoose.Document {
//     email: string;
//     firstName: string;
//     lastName: string;
//     password: string;
// }
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

// const UserSchema = new Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     firstName: { type: String, required: false, default: 'Toto' },
//     lastName: { type: String, required: false, default: 'Toto' },
// });

// Export the model and return your IUser interface
const  User = mongoose.model<UserInterface>('User', UserSchema);
module.exports = User;
