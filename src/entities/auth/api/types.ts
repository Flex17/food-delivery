import { IUserInfo } from "entities/user";

export interface IRegistrationResponse {
    idToken: string;
    email: string;
    localId: string;
    displayName: string;
    refreshToken: string;
}

export interface IUserRegistrationData {
    email: string;
    password: string;
}

export interface IRegistrationRequest extends IUserRegistrationData {
    displayName: string;
}

export interface IGetUserResponse {
    users: IUserInfo[];
}

export interface IGetUserRequest {
    token: string;
}
