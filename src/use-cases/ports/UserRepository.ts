import { IUserData } from "../../entities/types/UserData";

export interface UserRepository{
    findAllUsers: (id: string)=> Promise<IUserData[] | Error>;
    findUserByEmail: (email: string)=> Promise<IUserData | Error>;
    add: (user: IUserData)=> Promise<IUserData>;
    exists: (user: IUserData)=> Promise<boolean>;
}