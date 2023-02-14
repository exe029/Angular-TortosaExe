export interface UserResp{
    ok:   boolean;
    user: User;
}

export interface User {
    email:    string;
    password: string;
    avatar:   string;
    fname:    string;
    lname:    string;
    id:       string;
}
