import { Request, Response } from "express"
export interface UserRequestInterface extends Request {
    user: string // or any other type
}

export interface UserResponseInterface extends Response{
    user: string
}
