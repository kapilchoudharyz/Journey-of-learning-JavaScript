'use strict';
/*
//Constructor function
//Constructor function always start with a capital latter
//An arrow function will not work as a function constructor as they don't have their own this keyword.
const Person = function (fullName, birthYear) {
  //Instance properties
  this.fullName = fullName;
  this.birthYear = birthYear;
  //just like property we can also add method
  //But don't do this because of performance issues, to solve this problem we use prototype and prototypal inheritance.
  //      this.calcAge = function (){
  //         console.log(`${this.fullName} is ${2023 - this.birthYear}`)
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
  console.log(`${this.fullName} is ${2023 - this.birthYear} years old`);
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
console.log(kapil.hasOwnProperty('fullName')); //true
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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //methods created inside the class but  outside the constructor will be added to the prototype of the objects created by the constructor.
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  //Just like objects classes also have getters and setters
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const dixit = new PersonCl('dixit kadayan', 2018);
console.log(dixit);
dixit.calcAge();
console.log(dixit.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.fullName}`);
// };
dixit.greet();

//Using getter
console.log(dixit.age);
//NOTE--> Classes are special kind of functions behind the scene.
//NOTE--> Classes work same as constructor function. So it is upto us which one we want to use.
//1. Classes are not Hoisted(Meaning that they can not be used before declaring them in the code).
//2.Classes are also first class citizen like functions(meaning they can be passed into a function and can be returned by the function).
//3.Classes are executed in strict mode even if we didn't activate for our entire script.

//Setters and Getters
//Every object in js can have setter and getter properties.
//Setters and getters are basically functions that get and set a value. From outside they still look like regular properties.

const account = {
  owner: 'jonas',
  movements: [500, 520, 896, 6000],
  //Adding a getter to the object
  //To transform a method into getter we add 'get' in the begining.
  //Getter
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //Setter :--> For setter there should be at least one parameter.
  set latest(mov) {
    this.movements.push(mov);
  },

};
//Note:- We use getters as simply a property, We don't call the method as below.
console.log(account.latest); //6000
//Using the setter
account.latest = 50;

//Static Method.
//We write static keyword in front  of  a method to make it static method.
//Static method are methods which are available on the class not on the instances


//Object.create
//Using object.create we can set the prototype of the object manually to any object.
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const kannu = Object.create(PersonProto);
console.log(kannu);
kannu.name = 'kayan';
kannu.birthYear = 2017;
kannu.calcAge();
console.log(kannu.__proto__ === PersonProto); //true

const mannu = Object.create(PersonProto);
mannu.init('Mananya', 2014);
mannu.calcAge();
*/
/*
// Inheritance between classes

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  //DRY
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Create below connection before further putting any more functions.
//Linking prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i am in ${this.course}`);
};

const nishu = new Student('Nishant', 2006, '12th');
console.log(nishu instanceof Student);
console.log(nishu instanceof Person);
Student.prototype.constructor = Student;
nishu.introduce();
nishu.calcAge();
*/

/*
//Inheritance between ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //methods created inside the class but  outside the constructor will be added to the prototype of the objects created by the constructor.
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  //Just like objects classes also have getters and setters
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert(`${this.name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log(`Hey there.`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //This super should be the first thing in the constructor
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i am in ${this.course}`);
  }
  //We can override a method if it exists in the parent because js will check the method in its prototype before checking the prototype of prototype.
  calcAge() {
    console.log(`${this.fullName} is ${2025 - this.birthYear} old`);
  }
}
const annu = new StudentCl('Annu Dhillon', 2008, '10th');
console.log(annu);
console.log(annu.birthYear);
annu.introduce();
console.log(annu.course);
annu.calcAge();
*/
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //Protected
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account mr. ${this.owner}`);
  }
  //Public interface
  getMovements() {
    return this._movements;
  }
  deposit(value) {
    this._movements.push(value);
  }
  withdraw(value) {
    this.deposit(-value);
  }
  approveLoan() {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

//Note:-->We can also create new properties in the instance and the property which are not based on any input.
const acc1 = new Account('kapil', 'EUR', 8949);
// acc1._movements.push(150);
// acc1._movements.push(-180);
acc1.deposit(250);
acc1.withdraw(25);
acc1.requestLoan(5000);
console.log(acc1);
console.log(acc1.getMovements());
*/
//Data privacy and data encapsulation.
//Private Class Fields and Methods

// 1.Public fields
// 2.Private fields
// 3.Public methods
// 4.Private methods

class Account {
  // 1.Public field(Instances)
  locale = navigator.language;
  // 2.Private fields(This # symbol makes it private. The private field properties can only access in the enclosing class.)
  #movements = [];
  #pin; //These are also like variables. We need to define it outside the constructor to make it private.

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //Protected
    // this.movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account mr. ${this.owner}`);
  }

  // 3.Public methods.

  getMovements() {
    return this.#movements;
  }
  deposit(value) {
    this.#movements.push(value);
  }
  withdraw(value) {
    this.deposit(-value);
  }
  // approveLoan() {
  //   return true;
  // }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

  // 4.Private methods.
  #approveLoan() {
    return true;
  }
}
const acc1 = new Account('kapil', 'EUR', 8949);
acc1.deposit(250);
acc1.withdraw(25);
acc1.requestLoan(5000);
console.log(acc1);
console.log(acc1.getMovements());
// console.log(acc1.#movements); Throws an error.
// console.log(acc1.#pin); Throws an error.
// console.log(acc1.#approveLoan(1000); //Throws an error.
