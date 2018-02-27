/**
 * Created by dell on 2018/1/24.
 */
/**
 * this js file is written to compare javascript function call and apply
 *
 * Syntax- call:
 function.call(thisArg, arg1, arg2, ...)

 Syntax - apply:
 func.apply(thisArg, [argsArray])

 they execute a function in the context, or scope, of the first argument that you pass to them.

 and the following examples code comes from http://hangar.runway7.net/javascript/difference-call-apply
 you can also consult the MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 **/


var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var sayHello = function () {
    console.log('Hello, ' + this.name);
};

var sayGoodbye = function () {
    console.log('Goodbye, ' + this.name);
};

//example 1
/*
 sayHello();
 sayGoodbye();

 Hello, undefined
 Goodbye, undefined
 */

//example 2
/*
 sayHello.call(person1);
 sayGoodbye.call(person2);

 Hello, Marvin
 Goodbye, Zaphod
 */

//example3
/*
 sayHello.apply(person1);
 sayGoodbye.apply(person2);

 Hello, Marvin
 Goodbye, Zaphod
 */

/**
 * two functions have many in common, however,look at their syntax, it may be easy to find something different
 * if you want to pass some arguments to call the function
 **/
var say = function (greeting) {
    console.log(greeting + ', ' + this.name);
};
/*
 say.call(person1, 'Hello');
 say.call(person2, 'Goodbye');
 */
//Hello, Marvin
//Goodbye, Zaphod

var update = function (name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
    console.log(this);
};

//update.call(person1, 'Slarty', 200, '1xM');

/**
 The limitations of call quickly become apparent when you want to write code that doesn't (or shouldn't) know the number of arguments that the functions need… like a dispatcher.
 **/

var dispatch = function (person, method, args) {
    method.apply(person, args);
};

dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Slarty', 200, '1xM']);
/**
 So that's the difference between call and apply. Both can be called on functions, which they run in the context of the first argument.
 In call the subsequent arguments are passed in to the function as they are,
 while apply expects the second argument to be an array that it unpacks as arguments for the called function.
 **/