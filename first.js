// JS is a programming language. We use it to give instructions to the computer.

// Input (code) --> Computer --> Output

// Code Editor --> VS Code (Free & Popular code editor by Microsoft)

// console.log(print) is used to print a message to the console.

// console.log("Hello World!");
// console.log("Hello are you!");

// Variables are containers for data

// name = 'Tony Stark';
// age = 24
// price = 150.50
// x = null;
// y = undefined;
// console.log(name);
// console.log(age);
// console.log(price);
// console.log(x);
// console.log(y);

// isFollow = true;
// console.log(isFollow);

// Js is a dynamically typed programming language



// ______ Variables ________ 

// * Variables names are case sensitive; "a" & "A" is different.
// apple and Apple are different

// * Only letters,digits,underscore ( _ ) and $ is allowed.(not even space)

// * Only a letter , underscore or $ should be the first character.

// * Reserved words cannot be variables names.



// _____ let , const & var _____

// var : Variable can be re-declared & updated. A global scope Variable.
// var age = 90;
// var age = 67;
// var age = 37; # this will be printed
// console.log(age); # 37

// let : Variable cannot be re-declared but can be updated. A block scope variable.
// let age = 90;
// age = 67;
// age = 37; // this will be printed
// console.log(age); // 37

// const : Variable cannot be-redeclared or updated. A block scope variable.
// const age = 24;
// age = 32; // TypeError: Assignment to constant variable
// const age = 90;
// console.log(age);



// _____ Data Types in JS _____
// Number,String,Boolean,Undefined,NNull,BiInt,Symbol

// Two types of Data types :-
// 1. Primitive Data Types :- Number , String , Boolean , Undefined , Null , BigInt , Symbol
// 2. Non-Primitive Data Types :- Objects (Collection of values) (key:value) pair
                             // |-- Arrays
                            // |-- Functions

// Creating an object in JS
// const student = {
//     fullName : 'Rahul Kumar',
//     age : 21,
//     cgpa : 9.1,
//     isPass : true
// }
// console.log(student["age"]);
// console.log(student.age);
// from above two methods we can access the key value from the object

// changing the value in the object
// student["age"] = student["age"] + 1;
// console.log(student.age);

// const product = {
//     productName : 'Parker Jotter Standard CT Ball Pen (Black)',
//     rating : 4,
//     disMrp : 270,
//     discount : 5
// }

// const profile = {
//     userName : 'Keshav Maheshwari',
//     isfollow : false,
//     followers : 123,
//     following : 321
// };
// console.log(profile);
// console.log(typeof profile["userName"]); // prints type of userName
// console.log(typeof profile["isfollow"]); // prints type of isfollow
// console.log(typeof profile["followers"]); // prints type of followers
// console.log(typeof profile["following"]); // prints type of following