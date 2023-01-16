import express from "express";
import { MongoDBUserRepository } from "./external-interfaces/Repositories/MongoDBUserRepository";
import { AppRouter } from "./routes/routes";

const app = express()
const repository = new MongoDBUserRepository()
const AppRoutes = new AppRouter(repository)

app.use(AppRoutes.routes)

app.listen(80, ()=>{
    console.log(`App running on Port 80!`)
})