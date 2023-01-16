import { IUserData } from "../../entities/types/UserData";

export class UserDoesntExistsError extends Error{
    constructor(user: IUserData){
        super(`User ${user.name} doesnt exists on database!`)

        this.name = 'UserDoesntExists'
    }
}