import { InvalidUserEmailError } from "../entities/errors/UserErrors/InvalidUserEmailError";
import { IUserData } from "../entities/types/UserData";
import { User } from "../entities/User";
import { UserAlreadyExistsError } from "./errors/UserAlreadyExistsError";
import { UserRepository } from "./ports/UserRepository";

export class RegisterUserOnEmail{
    private readonly UserData: IUserData;
    private readonly repository: UserRepository;

    constructor(user: IUserData, repository: UserRepository){
        this.UserData = user;
        this.repository = repository;
    }

    public async execute(): Promise<UserAlreadyExistsError | Error | IUserData>{
        const UserAlreadyRegistered = await this.repository.exists(this.UserData)

        if(UserAlreadyRegistered){
            return new UserAlreadyExistsError(this.UserData)
        }

        const response = await User.create(this.UserData, this.repository.add)

        if(response instanceof Error){
            return response instanceof InvalidUserEmailError ? new InvalidUserEmailError(this.UserData.email) : response 
        }else{
            return response
        }
    }
}