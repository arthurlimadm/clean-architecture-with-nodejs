import { LoginUser } from "../../use-cases/LoginUser";
import {Request, Response} from 'express'
import { UserRepository } from "../../use-cases/ports/UserRepository";

export class LoginUserController{
    private readonly repository: UserRepository

    constructor(repository: UserRepository){
        this.repository = repository
    }

    async handler(req: Request, res: Response):Promise<Response>{
        const {name, email, password} = req.body;

        if(name && email && password){
            const login =  new LoginUser({name, email, password}, this.repository)

            try{

                const response = await login.execute()
                return res.status(200).send(response)

            }catch(error){
                return res.status(400).send(error)
            }

        }else{
            return res.status(400).send(`
                Invalid request Body, ${
                name ? '' : '"Name"' + ''
                + email ? '' : '"Email"' + ''
                + password ? '' : 'Password'}
                property(s) required!
            `)
        }
    }
}