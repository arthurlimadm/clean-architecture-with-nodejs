import { InvalidUserEmailError } from "./errors/UserErrors/InvalidUserEmailError";

export class Email{

    static validate(email: string):InvalidUserEmailError | string{
        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(expression.test(email)){
            return email
        }
        return new InvalidUserEmailError(email)
    }
}