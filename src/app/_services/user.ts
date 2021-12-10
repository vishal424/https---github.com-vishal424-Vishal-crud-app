export class User {
    name: string;
    address: string;
    dob: Date;
    state: string;
    gender: string;
    subscribe: boolean;
    landmark: string;
    theme: string;
    password: string;
    email: string;
}


export interface IUser {
    name: string;
    address: string;
    dob: Date;
    state: string;
    gender: string;
    subscribe:boolean;
    landmark:string;
    theme:string;
    password:string;
    email:string;
}



export interface IUserPreference {
    name: string;
    email:string;
    mobile:number;
    contactPreference: string;
    password:string;
    confirmPassword:string;
}