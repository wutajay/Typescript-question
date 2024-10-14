"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENDER = void 0;
const message = (name) => {
    return `Hi ${name}, you are welcome!`;
};
console.log(message("Uchenna"));
function userAge(age) {
    if (age < 18)
        return "You are not eligible to do it";
    return "Congrats you are eligible";
}
console.log(userAge(22));
function caseChange(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(caseChange("uchenna"));
const items = [3, 5, 3, 4];
const result = items.filter((item) => item > 3).map((item) => item * 2);
console.log(result);
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "male";
    GENDER["FEMALE"] = "female";
})(GENDER || (exports.GENDER = GENDER = {}));
const user1 = {
    firstName: "Ejike",
    lastName: "Justice",
    age: 17,
    email: "ejike.justice@yahoo.com",
    gender: GENDER.MALE
};
const user2 = {
    firstName: "jay",
    lastName: "Just",
    age: 17,
    email: "ejike.justice@yahoo.com",
    gender: GENDER.MALE
};
console.log(user1);
console.log("---------------------");
console.log(user2);
