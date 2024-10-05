/*______ Comments in JS ______
Comments are the part of code which are not executed
Comments are used to write the statements to make easier to understand the code / logic
Generally, the comments are used to know about how the code works or about the logic of the code

For example the below code is used to print Second day on our console window*/
// console.log("Second day");



// ______ Operators in JS ______
// Used to perform some operation on data


// ____ Arithmetic Operation ____
// +,-,*,/

//       A        +       B
//     /         |         \
// operands   operators  operands

// let a = 5;
// let b = 2;
// console.log("a =",a," b =",b);
// console.log("a + b =",a+b);
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a % b =",a%b);
// console.log("a ** b =",a**b);

// Unary Operator
// let a = 5;
// let b = 2;
// console.log("a =",a," b =",b);
// console.log("a++ =",a++); // Post Increment
// console.log("a-- =",a--); // Post Decrement
// console.log("++a =",++a); // Pre Increment
// console.log("--a =",--a); // Pre Decrement


// ____ Assignment Operators ____
// These are used to assign values

// let a = 5;
// console.log("a =",a);

// a += 2; // a = a + 2
// console.log("a += 2 -->",a);

// a -= 2; // a = a - 2
// console.log("a -= 2 -->",a);

// a *= 2; // a = a * 2
// console.log("a *= 2 -->",a);

// a /=2 ; // a = a / 2
// console.log("a /= 2 -->",a);

// a %=2 ; // a = a % 2
// console.log("a %= 2 -->",a);

// a **=2 ; // a = a ** 2
// console.log("a **= 2 -->",a);


// ____ Comparision Operators ____
// Used for comparing values in JS
// Comparision operator always returns a boolean value

// let a = 5;
// let b = 2;

// console.log(" 5 == 2 ",a==b); // false

// console.log(" 5 != 2 ",a!=b); // true

// console.log(" 5 == '5' ",5=='5'); // this will return true because by default if the number i passed in the string then JS changes the datatypt from string --> number

// console.log(" 5 === '5' ",5==='5'); //Stricter version of == which checks the datatype

// console.log(" 5 !== '5' ",5!=='5');

// console.log(" 5 < 2 ",a<b);

// console.log(" 5 > 2 ",a>b);

// console.log(" 5 <= 2 ",a<=b);

// console.log(" 5 >= 2 ",a>=b);


// ____ Logical Operators ____
// These are used to find final output from multiple expression
// Output will be only Boolean type

// Logical AND   &&
// true true --> true
// Logical AND will only give true value when both the input is true else false

// let a = 6;
// let b = 5;

// let cond1 = a > b; // true
// let cond2 = a === 6; //true

// console.log("cond1 && cond2 -->", cond1 && cond2);

// let cond3 = a > b; // true
// let cond4 = a === 7; // false

// console.log("cond3 && cond4 -->", cond3 && cond4);

// _AND TABLE_
// Cond1   Cond2   Output
//   T      T       T
//   T      F       F
//   F      T       F
//   F      F       F

// Logical OR   ||
// let a = 6;
// let b = 5;

// let cond1 = a > b; // true
// let cond2 = a === 6; // true

// console.log("cond1 && cond2 -->", cond1 || cond2);

// let cond3 = a > b; // true
// let cond4 = a === 7; // false

// console.log("cond3 && cond4 -->", cond3 || cond4);

// let cond5 = a < b; // false
// let cond6 = a === 6; // true

// console.log("cond5 && cond6 -->", cond5 || cond6);

// _OR TABLE_
// Cond1   Cond2   Output
//   T      T       T
//   T      F       T
//   F      T       T
//   F      F       F

// Logical NOT   !
// true --> false
// false --> true
// let a = 6;
// let b = 5;

// let cond1 = a > b; // true
// let cond2 = a != 6; // false

// console.log("cond1 -->", !(cond1));
// console.log("cond2 -->", !(cond2));



// _______ Conditional Statements ______
// To implement some condition in the code

// __ if statement __
// if the condition is true in if statement then the if block of code will run
// let marks = 34;
// if(marks>33){
//     console.log("Congratulations you are Passed!");
// }

// __ else statement __
// if the condition is true in if statement then the if block of code will run if not then the else bolck of code will run
// esle statemwnt is always used with if statement
// let marks = 53;
// if(marks>33){
//     console.log("Congratulations you are Passed!");
// }
// else{
//     console.log("You are FAILED!");
// }

// JS code to find number is odd / even
// let number = 5;
// if(number%2==0){
//     console.log("Even Number");
// } else{
//     console.log("Odd Number")
// }

// __ else-if statment __
// let age = 70;
// if(age < 18){
//     console.log("Junior");
// } else if (age > 60) {
//     console.log("Senior");
// } else{
//     console.log("Middle")
// }


//  ____ Ternary Operators ___
// condition ? true output : false output;

// let age = 36;
// let result = age > 18 ? "adult" : "child";
// console.log(result);

// Ques 1
let number = prompt("Enter the number : ");

if(number%5==0){
    console.log(number,"Mutiple of 5!");
} else{
    console.log(number,"Not Mutiple of 5!")
}