export interface UserInterface {
    name: string,
    lastname: string,
    pictureLink: string,
    email: string,
    balance: number,
}

export interface UserInfoInterface extends UserInterface {
    income: number
}
