import { Request, Response } from "express"
import {UserInterface} from "./UserInterface";
export interface UserRequestInterface extends Request {
    user?: UserInterface // or any other type
}

export interface UserResponseInterface extends Response{
    user: string
}
