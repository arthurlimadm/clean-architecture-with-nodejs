import { IUserData } from "../../entities/types/UserData";

export class UserAlreadyExistsError extends Error{
    constructor(user: IUserData){
        super(`User ${user.name} already exists!`)

        this.name = 'UserAlreadyExists'
    }
}