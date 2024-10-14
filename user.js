"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
    info() {
        return `Congratulations ${this.firstName} ${this.lastName} your transaction has now been processed and you are assigned to ${this.gender}hostels`;
    }
}
exports.User = User;
console.log(User);
