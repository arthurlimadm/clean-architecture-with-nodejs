import { Email } from "./Email";
import { InvalidPasswordError } from "./errors/UserErrors/InvalidPasswordError";
import { InvalidUserEmailError } from "./errors/UserErrors/InvalidUserEmailError";
import { IUserData } from "./types/UserData";

export class User {
    public readonly name: string;
    public readonly email: string;

    constructor(name: string, email: string){
        this.name = name
        this.email = email
        Object.freeze(this)
    }

    static async create(userData: IUserData, createUserFunction: (user: IUserData)=> Promise<IUserData>)
    :Promise<InvalidUserEmailError | IUserData>{
        if(!Email.validate(userData.email)){
            return new InvalidUserEmailError(userData.email)
        }else{
            const response = await createUserFunction(userData)

            if(response) {return response}

            return new Error('Error at creating new user')
        }
    }

    static async login(userData: IUserData):Promise<InvalidPasswordError | IUserData>{
        return new InvalidPasswordError(userData)
    }
}