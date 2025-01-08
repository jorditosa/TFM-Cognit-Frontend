
export interface User {
    username: string;
    email: string;
    password: string;
    points?: string;
    token?: string;
    confirmed?: boolean;
}

export interface UserToken {
    token: string;
}