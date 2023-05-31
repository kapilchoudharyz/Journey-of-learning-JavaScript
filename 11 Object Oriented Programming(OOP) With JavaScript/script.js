'use strict';
//Constructor function
//Constructor function always start with a capital latter
//An arrow function will not work as a function constructor as they don't have their own this keyword.
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //just like property we can also add method
  //But don't do this because of performance issues, to solve this problem we use prototype and prototypal inheritance.
  //      this.calcAge = function (){
  //         console.log(`${this.firstName} is ${2023 - this.birthYear}`)
  //     }
};
//When we call a function with new keyword the following things happen behind the scene.
//1. A new empty object {} is created.
//2. Function is called. in this function 'this' keyword will be set to this newly created object, this = {}
//3. This newly created object is linked to a prototype
//4. Finally, the new object created is returned automatically from the constructor function.
const kapil = new Person('kapil', 2001);
console.log(kapil);
const nishu = new Person('Nishu', 2007);
console.log(nishu);
const someOne = 'Dixit';
console.log(kapil instanceof Person); //true
console.log(someOne instanceof Person); //false

//Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(`${this.firstName} is ${2023 - this.birthYear} years old`);
};
kapil.calcAge();
console.log(kapil.__proto__);
console.log(kapil.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(kapil)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
//Person.prototype is prototype of kapil but Person.prototype is not the prototype of person.

//We can also set properties on the prototype
Person.prototype.species = 'Homo sapiens';
console.log(kapil.species);
console.log(kapil, nishu); //Both the object will have access to this species property.

//We can check if an object has its own property or it inherited the property as below.
console.log(kapil.hasOwnProperty('firstName'));
console.log(kapil.hasOwnProperty('species'));

//Prototypal inheritance and the prototype chain
