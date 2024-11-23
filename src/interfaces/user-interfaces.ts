
export interface User {
    username: string;
    email: string;
    password: string;
    points?: number;
    token?: string;
    confirmed?: boolean;
}