// console.log("Hi JS developers");
// single line comment

/*
multi line comment

*/
// alert("hello there, ");
// we use alert mainly for early stage to debug the code

// ====vairables===

// var,let,const
// var firstName; creating variables
// var firstName = "Samir Shrestha"; //assigning value
// let lastName = "fakfkafjk";
// const dob = "20-20-2020";
// console.log(firstName, lastName, dob);
// firstName = "tim";
// lastName = "smith";

// console.log(firstName, lastName, dob);
// ==== JS Arithmetic operators====
//  Arithmetic
// +	Addition
// let a = 5;
// const b = 10;
// const result = a + b;
// console.log(result);

// -	Subtraction
// const result = a - b;
// console.log(result);
// *	Multiplication
// const result = a * b;
// console.log(result);
// console.log(result);
// **	Exponentiation (ES2016)
// const result = a ** b;
// console.log(result);
// /	Division
// const result = a / b;
// console.log(result);

// console.log(result);
// %	Modulus (Division Remainder)
// const result = a % b;
// console.log(result);

// console.log(result);
// ++	Increment
// console.log(a);
// console.log(a++);
// console.log(++a);
// a++;

// console.log(result);
// --	Decrement  */
// console.log(a);
// console.log(a--);
// console.log(--a);
// the increment or decrement operator when used infront or after first uses the value from the variable and the increases or decreases and vice-versa.

// Comparisons

// ==
// ===
// >, >=
// <, <=

// const a = 5;
// const b = 5;
// // const result = a > b;
// // const result = a >= b;
// // const result = a == b; equality operator
// // const result = a === b;

// console.log(result);
// Data types
// Primitives
// const name = "samir";
// console.log(typeof name, name);
// String  		// “prem acharya”
// Number 	//123
// safe number - 2^53-1 to 2^53-1
// const num = 3232_45874
// const num = 4545;
// console.log(num);

// Boolen		// true or false
// Undefined	// not defined in system memory
// const val = undefined;

// let val = null;
// console.log(typeof val, val);
// Null  		// defined in system memory but no value assigned
// Reference Types
// Object 		//{key:”value”}
// const person = {
//   firstName: "samir",
//   lastName: "shrestha",
// };
// console.log(person);
// console.log(person.firstName);
// console.log(person["firstName"]);

// Array		//[“data”, 1232, {}, []]

// const arg = ["djsfslfj", 454, {}, [], true, null];
// console.log(arg);
// Function 	// function()
// Es6 	// const sayHi ()=> “hi”

// Math.PI;
// const ans = Math.PI;
// console.log(ans);
// Math.round(4.7);
// const ans = Math.round(4.6);
// console.log(ans);
// Math.pow(8, 2);
// Math.sqrt(64);

// Math.ceil(4.4);
// const ans = Math.ceil(4.6);
// console.log(ans);
// Math.floor(4.7);
// const ans = Math.floor(4.6);
// console.log(ans);

// Math.min(0, 150, 30, 20, -8, -200);
// Math.max(0, 150, 30, 20, -8, -200);
// Math.random();

// console.log(ans);

// if (pet === "cat") {
//   console.log("meow");
// } else if (pet === "dog") {
//   console.log("woff");
// } else {
//   console.log("moo");
// }

// switch
// const pet = "cow";
// switch (pet) {
//   case "cat":
//     console.log("meow");
//     break;
//   case "cow":
//     console.log("moo");
//     break;
//   default:
//     console.log("woof");
// }
// Error handling
// try {
//   // code
//   console.log(first);
// } catch (error) {
//   // what you want to do when you catch an
// } finally {
//   // this code will run
// }

// scheduling
// let timerId = setInterval(() => {
//   console.log("I am from timeout");
// }, 2000);
// console.log(timerId);
// // setTimeout(() => {
// //   console.log("I am from timeout");
// // }, 3000);
// clearInterval(timerId);
//settimeout;

// setTimeout(() => {
//   console.log("I am from settimeout");
// }, 3000); //3s

// // setInterval
// let i = 0;
// const counter = setInterval(() => {
//   console.log("it is " + i++);
//   if (i === 10) {
//     clearInterval(counter);
//     console.log("it stopped");
//   }
// }, 2000); //2s
// // => clearInterval

// JS -ES6
// Let, Const
// Template literals
// const a = 5;
// const b = 6;
// const c = a + b;
// console.log("when we add" + a + "and" + b + "the total would be" + c);

// const str = `when we add ${a} and ${b} the total would be
// ${c}
// `;
// console.log(str);

// Arrow function
// function add(a, b) {
//   const total = a + b;
//   return total;
// }
// const add = (a, b) => {
//   const total = a + b;
//   return total;
// };
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(5, 6));

// Destructuring
// Default + Rest + Spread

// loops
// for loop
// const car = "faklj";
// for (i = 0; i < car.length; i++) {
//   console.log(i);
// }
// while(condition)
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// do while
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i === 5) {
//     break;
//     i++;
//   }
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   if (i % 2 === 1) {
//     // continue;
//     console.log(i);
//   }
// }
// Number
// down casting
// const num = "s2324.355s";
// const val = +num;
// const val = Number(num);
// server validation
// const val = parseInt(num);
// const val = parseFloat(num);

// console.log(val, isNaN(val));

// ParseInt, folat
// String
// Escape character

// const str = "hi I'am samir shrestha";
// const str = `hijfkalkjfal`;
// const val = str.toLowerCase();
// const val = str.length;
// const val = str[1];
// const val = str.indexOf("s");
// const val = str.lastIndexOf("s");
// const val = str.replace("s", "a");
// const val = str.replaceAll("s", "a");
// const val = str.substring(5, 8);
// const val = str.substring(5);
// const val = str.slice(-1);
// const val = str.substring(5, 8);
// const val = str.slice(5, 8);

// const val = str.includes("samir");
// .search method searches the position
// const val = str.search("samir");
// const val = str.charAt(1);
// changes the character at position to ascii value
// const val = str.charCodeAt(1);
// const val = str.split(",");
// .split chages sting into array
// const val = str.trim();
// console.log(str.length);
// console.log(val.length);
// Length

// indexOf, lastIndexOf, search
// Slice, substring, substr
// Replace, contact, trim
// toUpperCase, toLowerCase
// charAt, [], split

//  array
// const vals = ["samir", 454, true, null, undefined, NaN, [], {}];
// console.log(typeof vals, vals);
// manipulation of array
// const fruits = ["banana", "mango", "orange"];
// add item at the end
// fruits.push("apple");
// fruits.shift("apple");
// fruits.unshift("apple");
// fruits.unshift("mango");
// const dt = fruits.pop();
// const dt = fruits.slice(1, 2);
// const dt = fruits.splice(1, 0, "berry");
// console.log(dt);
// console.log(fruits.sort());
// console.log(fruits.reverse());
// const num = [23, 454, 47, 2, 40];
// console.log(num.sort((a, b) => a - b));
// // sorts the array in ascending orders
// console.log(fruits.toString().split(","));

// array loops
// fruits.forEach((itm, i) => {
//   console.log(itm + " is yummy", i);
// });
// // map to return same size of array
// const newArg = fruits.map((itm, index) => {
//   console.log(itm, index);
//   return "SKU-" + itm.toUpperCase();
// });
// console.log(newArg);

// in filter the item returns based on the condition listed in the function

// search
// find method only return the found first item within the array.
// const result = fruits.find((item) => {
//   return item.includes("e");
// });
// console.log(result);
// for checking the condition in every item we use every method.
// const result = fruits.every((item) => item.includes("a"));
// console.log(result);
// to add the numeric value inside array we use reduce method defining the variables

// const money = [2324, 3435, 533];
// const total = money.reduce((acc, item) => {
//   return acc + item;
// }, 10);
// console.log(total);
// defining array with a predefined value
// const arg = Array(100).fill("😍");
// console.log(arg);

// challege #1

//

// 1. create an array of 50 random number programmaically ranges between 1 and 100.
// let arr = [];
// for (let i = 0; i < 50; i++) {
//   arr.push(Math.floor(Math.random() * 100 + 1));
// }
// // 3. Get the total of the array
// const total = arr.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log(arr);
// // 2 .sort the array in descending order
// console.log(arr.sort((a, b) => b - a));
// console.log(total);
// // 4. Divide the original array into 2 new arrays that contains even or odd numbers only each.
// const odd = arr.filter((od) => {
//   return od % 2 !== 0;
// });
// const even = arr.filter((eve) => eve % 2 === 0);
// console.log(even, odd);
// // 5. remove duplicates number for the original array
// const uniqueArg = arr.filter((item, i) => i === arr.indexOf(item));
// console.log(uniqueArg);

// const array = [];
// while (array.length < 50) {
//   const a = Math.floor(Math.random() * 100) + 1;
//   if (!array.includes(a)) {
//     array.push(a);
//   }
// }
// console.log(array);
// console.log(array.sort());

// object

// to store multiple information for an individual item.

// console.log(person);

// how to access the object
// console.log(person.name);
// console.log(person["active"]);
// to change the properties
// person.name = "sfja";
// console.log(person.name);
// console.log(person.skills[2]);
// console.log(person.parent.father);
// to add a property we put it in left side and assign a value to it.
// person.gender = "n/A";
// console.log(person.gender);
// to delete the the data from the original object

// for (let key in person) {
// console.log(key, person[key]);
// }
// convert object into array
// const p = Object.keys(person);
// console.log(p);
// Destructuring
// const { fname = "dfs", fadd = "kfjlja" } = person;
// console.log(fname, fadd);
// console.log(person);

// Default + Rest + Spread
// const bio=()=>{
//   const{name,add}=
// }
// const p = {
//   name: "sam",
//   add: "sydney",
// };
// const career = {
//   educatiion: "bsc",
//   year: 2023,
// };

// ways to combine two objects
// const samobj = Object.assign({}, p, career);
// p.name = "harry";
// console.log(samobj);

// spread operator to combine two object
// const samobj = {
//   ...p,
//   ...career,
// };
// console.log(samobj);

// before the = sign the ... operator acts as rest

// const { name, ...rest } = samobj;
// console.log(name, rest);

//

// delete person.name;
// console.log(person);
// Date()

// const today = Date();
// const today = Date.now();
// const today = new Date("2020-8-10");
// const data = today.toDateString();
// const data = today.getDay();
// const data = today.getFullYear();
// const data = today.getMonth();
// const data = today.getDay();

// today.setDate(today.getDate() + 5);
// console.log(typeof today, today);

// challenge #1 Create a function that takes foods and the expire date and returns one of the followings:
// 1. if expired: AB is expired 4 days ago.

//2. if not expired: you have 10 days to use this product
// 1. create couple food objects with name and exp
// 2. create one function which checks the date return message like above.

// const foods =[
//   {
//     name: " tuna",
//     exp: "2023-10-15",
//   },
//   {
//     name: "mile",
//     exp:"2023-9-15",
//   }
// ]
// const today=new Date();
// const
// function checkExpiration(foods) {
//   const today = new Date();
//   const messages = [];

//   foods.forEach((food) => {
//     const expirationDate = new Date(food.expireDate);
//     const daysRemaining = Math.ceil(
//       (expirationDate - today) / (1000 * 60 * 60 * 24)
//     );

//     if (daysRemaining < 0) {
//       const daysAgo = Math.abs(daysRemaining);
//       messages.push(
//         `${food.name} is expired ${
//           daysAgo === 1 ? "1 day" : `${daysAgo} days`
//         } ago.`
//       );
//     } else {
//       messages.push(
//         `You have ${
//           daysRemaining === 1 ? "1 day" : `${daysRemaining} days`
//         } to use ${food.name}.`
//       );
//     }
//   });

//   return messages;
// }

// // Example food objects
// const foods = [
//   { name: "Apple", expireDate: "2023-08-25" },
//   { name: "Milk", expireDate: "2023-09-02" },
//   { name: "Bread", expireDate: "2023-08-20" },
// ];

// const messages = checkExpiration(foods);
// messages.forEach((message) => console.log(message));

// const check =foods.forEach()=>{
//   if(foods.exp===Date()){
//     console.log("The food is expired today.")
//   }
//   else {
//     console.log("first")
//   }
// };
// console.log(check)

// Formate
// Get Methods
// Set Methods
