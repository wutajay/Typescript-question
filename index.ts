const message = (name:string):string=>{
    return `Hi ${name}, you are welcome!`
}

console.log(message("Uchenna"));



function userAge (age:number):string{
    if(age < 18) return "You are not eligible to do it";

    return "Congrats you are eligible"
}

console.log(userAge(22));


function caseChange (str:string){
    return str[0].toUpperCase() + str.slice(1)
}

console.log(caseChange("uchenna"));

const items:number[] = [3, 5, 3, 4]
const result = items.filter((item)=> item > 3).map((item)=> item * 2)

console.log(result);


export enum GENDER {
    MALE = "male",
    FEMALE = "female"
}

interface Iperson {
    firstName: string
    lastName: string
    age: number
    email: string
    gender: GENDER
    paid?: boolean
}

const user1: Iperson = {
    firstName: "Ejike",
    lastName: "Justice",
    age: 17,
    email: "ejike.justice@yahoo.com",
    gender: GENDER.MALE
}; 

const user2: Iperson = {
    firstName: "jay",
    lastName: "Just",
    age: 17,
    email: "ejike.justice@yahoo.com",
    gender: GENDER.MALE
}; 

console.log(user1);
console.log("---------------------");
console.log(user2);

