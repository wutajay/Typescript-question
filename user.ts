import { GENDER } from ".";

export class User{
    private firstName: string;
    private lastName: string;
    private gender: GENDER;

    constructor(firstName: string, lastName: string, gender: GENDER){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }

    info(): string {
        return `Congratulations ${this.firstName} ${this.lastName} your transaction has now been processed and you are assigned to ${this.gender}hostels`

    }

}

console.log(User);
