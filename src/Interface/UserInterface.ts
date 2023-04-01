export interface UserInterface {
    first_name: string,
    last_name: string,
    pictureLink: string,
    email: string,
    balance: number,
}

export interface UserInfoInterface extends UserInterface {
    income: number
}
