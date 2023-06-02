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
console.log(kapil.hasOwnProperty('firstName')); //true
console.log(kapil.hasOwnProperty('species')); //false

//Prototypal inheritance and the prototype chain
//The Object[kapil] can inherit properties from its prototype which is Person.prototype and Person.prototype can inherit properties from its prototype which is object.prototype and the prototype of object.prototype is null. This inheritance of method from an object's prototype is called prototypal inheritance.
//Prototype chain --> Series of links between objects, linked through prototypes (Similar to the scope chain)

// Note that every object has its prototype in JS

//prototypal inheritance on built in objects.
//Object.prototype(Top of the prototype Chain)
console.log(kapil.__proto__.__proto__); //logs prototype property of object because the prototype of kapil object is person.prototype and the prototype of Person.prototype is Object
console.log(kapil.hasOwnProperty('firstName')); //hasOwnProperty method works due to prototypal inheritance.
console.log(kapil.__proto__.__proto__.__proto__); //Null
console.log(Person.prototype.constructor); //point back to the constructor itself.
console.dir(Person.prototype.constructor); //point back to the constructor itself.

const arr = [1, 2, 8, 15, 56, 1, 15]; //new Array = [](so whenever we create an array like this it is created by the array constructor.)
console.log(arr.__proto__); //Logs all the methods present on an array.
//Note :--> The prototype of constructor function is equal to the prototype of all the object created by that constructor.
console.log(arr.__proto__ === Array.prototype); //true
console.log(Array.prototype);
console.log(arr.__proto__.__proto__); //Returns the methods available for object because arr.__proto__ itself is an object and any object has access to its prototypes methods.

//We can add a new method to the prototype of array constructor. Then all arrays will inherit this method.
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); //Returns the array with unique values.

//Function itself is an Object so it also has a prototype.
console.dir((x) => x + 1); //We see that in this case the prototype will contain the methods that we have used before on the function(call, apply, bind.).

//ES6 Classes.
//class Expression
// const PersolCl = class {
//
// }
//Class declaration.
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //methods created inside the class but  outside the constructor will be added to the prototype of the objects created by the constructor.
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey, ${this.firstName}`);
  }
}
const dixit = new PersonCl('dixit', 2018);
console.log(dixit);
dixit.calcAge();
console.log(dixit.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}`);
// };
dixit.greet();

//NOTE--> Classes are special kind of functions behind the scene.
//1. Classes are not Hoisted(Meaning that they can not be used before declaring them in the code).
//2.Classes are also first class citizen like functions(meaning they can be passed into a function and can be returned by the function).
//3.Classes are executed in strict mode even if we didn't activated for our entire script.
