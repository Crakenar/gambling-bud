import mongoose from 'mongoose';
export interface UserInterface extends mongoose.Document {
    email: string,
    password: string,
    name: string,
    lastname: string,
    balance: number,
    income: number,
    pseudo?: string,
    pictureLink?: string,
}
