import { Router } from "express";
import { UserRepository } from "../use-cases/ports/UserRepository";
import { LoginUserController } from "./controllers/LoginUserController";

export class AppRouter{
    private repository: UserRepository;
    private Router: Router;

    constructor(repository: UserRepository){
        this.Router = Router()
        this.repository = repository
    }

    routes():Router{
        this.Router.get('/login', new LoginUserController(this.repository).handler)

        return this.Router
    }

}
