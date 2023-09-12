export interface TabInterface {
    index: number,
    name: string
}

export interface TabEnum {
    [key: string]: TabInterface;
}
