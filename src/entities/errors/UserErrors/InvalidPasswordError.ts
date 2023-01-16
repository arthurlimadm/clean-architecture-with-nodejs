import { IUserData } from "../../types/UserData"

export class InvalidPasswordError extends Error{
    constructor(user:IUserData){
        super(`The password passed to ${user.email} is invalid!`)
        this.name = 'InvalidPassword'
    }
}