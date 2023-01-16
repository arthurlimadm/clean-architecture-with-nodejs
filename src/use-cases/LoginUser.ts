import { InvalidPasswordError } from "../entities/errors/UserErrors/InvalidPasswordError";
import { IUserData } from "../entities/types/UserData";
import { User } from "../entities/User";
import { UserDoesntExistsError } from "./errors/UserDoestnExists";
import { UserRepository } from "./ports/UserRepository";

export class LoginUser{
    private readonly user: IUserData;
    private readonly repository: UserRepository

    constructor(user: IUserData, repository: UserRepository){
        this.user = user
        this.repository = repository
    }

    async execute(): Promise<IUserData | InvalidPasswordError | UserDoesntExistsError>{
        const UserExists = await this.repository.exists(this.user)

        if(UserExists){
           return User.login(this.user)
        }else{
            return new UserDoesntExistsError(this.user)
        }
    }
}