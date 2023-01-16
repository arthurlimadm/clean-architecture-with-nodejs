export class InvalidUserEmailError extends Error{
    constructor(email:string){
        super(`Email ${email} is Invalid!`)
        this.name = 'InvalidUserEmail'
    }
}