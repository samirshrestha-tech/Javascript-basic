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
class Human {
    constructor(n,d,p){
        this.name = n
        this.dob =d
        this.petName = p
    }
    bio(){
        return `hi I am ${this.name} and was born in ${this.dob}`
    }
    petBio(){
        return `My pet name is ${this.petName} and I love it.`
    } 
}
const person ={
    name: "samir",
    dob:"24345",
    pet:"hin"

}

// polymorphism.
// have multiple instances of a one object.
