//region string type required function
function greeter(person) {
    return "hello, " + person;
}
var user = "jane user";
//console.log(greeter(user));                      //to be performed
//endregion
function greeter1(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { "firstName": "jane", lastName: "User" };
//console.log(greeter1(user1));
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = null;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(area, city, school) {
        this.area = area;
        this.city = city;
        this.school = school;
        this.fullSchool = null;
        this.fullSchool = area + " " + city + " " + school;
    }
    return Teacher;
}());
var user2 = new Student("jane", "M.", "user");
var teacher = new Teacher("cn", "wuhan", "ccnu");
/*
document.body.innerHTML = greeter1(teacher);

 error TS2345: Argument of type 'Teacher' is not assignable to parameter of type 'Person'.
 Property 'firstName' is missing in type 'Teacher'.

It looks wired, class student does not implement or extend person, however, the function greeter can receive the student rather than class teacher
so, can we say that typescript judge class relation by constructor or properties ?

 */
