
export interface loginInterface {
    email: string,
    password: string,
}

export interface registerInterface extends loginInterface{
    confirmPassword: string,
}
