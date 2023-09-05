// Object, property, and method
// const person = {
//   name: "samir",
//   bio: () => {
//     return "fjaf";
//   },
// };
// console.log(person.bio());
// const person = (name, add) => {
//   return {
//     personName: name,
//     address: add,
//     boi() {
//       return `Hey this person name is ${this.personName} and he lives in ${this.address}`;
//     },
//     upper() {
//       this.personName = this.personName.toUpperCase();
//     },
//   };
// };
// const p = person("samir", "rockdale");
// p.upper();
// console.log(p, p.boi());

// Class

// class Person {
//   constructor(n, a) {
//     this.personName = n;
//     this.address = a;
//   }
//   boi() {
//     return `Hey this person name is ${this.personName} and he lives in ${this.address}`;
//   }
//   upper() {
//     this.personName = this.personName.toUpperCase();
//   }
// }
// const p = new Person("samir", "rockdale");
// p.upper();
// console.log(p, p.boi());
// This keywords
// constructor
// its written within the class object  and executes first
// Encapsulation

// have access to function but doesn't know how it works in detail
// Abstraction
// do not have access outside the class.
// Inheritance
// class Human {
//     constructor(n,d,p){
//         this.name = n
//         this.dob =d
//         this.petName = p
//     }
//     bio(){
//         return `hi I am ${this.name} and was born in ${this.dob}`
//     }
//     petBio(){
//         return `My pet name is ${this.petName} and I love it.`
//     }
// }
// const person ={
//     name: "samir",
//     dob:"24345",
//     pet:"hin"

// }

// polymorphism.
// have multiple instances of a one object.
// Side effects

// Pure Function
// A pure function is a function that, given the same input, will always produce the same output and has no side effects. This means that it does not modify any external state or data and does not rely on any external state or data.
// Pure function that adds two numbers
// function add(a, b) {
//   return a + b;
// }

// // Pure function that multiplies two numbers
// function multiply(a, b) {
//   return a * b;
// }

// // Pure function that returns the square of a number
// function square(x) {
//   return x * x;
// }

// // Pure function that returns the length of an array
// function arrayLength(arr) {
//   return arr.length;
// }

// High order function
// In JavaScript, higher-order functions are functions that can take other functions as arguments or return functions as their result. They allow for more advanced and expressive programming by enabling you to work with functions as first-class citizens. Here are some examples:
// map: The map function is a higher-order function that takes a callback function and applies it to each element of an array, returning a new array with the results.
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(function (x) {
//   return x * 2;
// });
// // doubled is now [2, 4, 6, 8, 10]
// filter: The filter function is another higher-order function that takes a callback function and returns a new array containing elements for which the callback returns true.
/*const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (x) {
  return x % 2 === 0;
});
// evenNumbers is now [2, 4]*/
// setTimeout: The setTimeout function is a higher-order function that takes a function (a callback) and a time delay as arguments and schedules the execution of the callback after the specified delay.
// setTimeout(function () {
//   console.log("This function will run after a delay.");
// }, 1000);

// Recursion
// debugger;
// let i = 0;
// const increase = () => {
//   i++;
//   console.log(i);
//   if (i === 100) {
//     return;
//   }
//   // calling itself
//   increase();
// };
// increase();
// use case for recursive function
const money = [2, 4, 5, 6, 1];
let sum = 0;
const total = (money) => {
  sum += money.pop();
  console.log(sum);
  if (!money.length) {
    return sum;
  }
  return total(money);
};

const ttl = total(money);
console.log(ttl);

// Multiplier
// const addAndSquare = (a, b) => {
//   const ttl = a + b;
//   const square = (multiplier) => {
//     return ttl ** multiplier;
//   };
//   return square;
// };
// const result = addAndSquare(2, 3)(2);
// // const ans = result(2);
// console.log(result);
