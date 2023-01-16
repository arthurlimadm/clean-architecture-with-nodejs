import { IUserData } from "../../entities/types/UserData";
import { UserRepository } from "../../use-cases/ports/UserRepository";

export class MongoDBUserRepository implements UserRepository{
    
    public async findAllUsers(id: string):Promise<IUserData[] | Error>{
        return new Error()
    }

    public async findUserByEmail(email: string):Promise<IUserData | Error>{
        return new Error()
    };

    public async add(user: IUserData):Promise<IUserData>{
        return {name: 'Teste', email: 'Teste@teste.com', password: 'Teste'}
    }

    public async exists (user: IUserData):Promise<boolean>{
        return true
    };
}