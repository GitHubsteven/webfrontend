/**
 * Created by dell on 2018/1/16.
 */
interface Person {
    firstName:string;
    lastName: string;
}
//region string type required function
function greeter(person:string) {
    return "hello, " + person;

}

let user = "jane user";
//console.log(greeter(user));                      //to be performed
//endregion

function greeter1(person:Person) {
    return "Hello, " + person.firstName + " " + person.lastName;

}
let user1 = {"firstName": "jane", lastName: "User"};

//console.log(greeter1(user1));

class Student {
    fullName = null;

    constructor(public firstName:string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

class Teacher {
    fullSchool = null;

    constructor(public area:string, public city:string, public school:string) {
        this.fullSchool = area + " " + city + " " + school;
    }
}

let user2 = new Student("jane", "M.", "user");

let teacher = new Teacher("cn","wuhan","ccnu");

/*
document.body.innerHTML = greeter1(teacher);

 error TS2345: Argument of type 'Teacher' is not assignable to parameter of type 'Person'.
 Property 'firstName' is missing in type 'Teacher'.

It looks wired, class student does not implement or extend person, however, the function greeter can receive the student rather than class teacher
so, can we say that typescript judge class relation by constructor or properties ?

 */
