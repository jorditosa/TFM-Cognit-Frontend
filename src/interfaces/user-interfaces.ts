
export interface User {
    username: string;
    email: string;
    password: string;
    points?: string;
    token?: string;
    confirmed?: boolean;
}

export interface UserCookie {
        id: number;
        email: string;
        points: string;
}

export interface Player {
    email: string;
    points: string;
}

export interface UserToken {
    token: string;
}