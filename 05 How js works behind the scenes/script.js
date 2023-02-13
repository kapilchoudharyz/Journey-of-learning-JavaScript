'use strict';
/*
function calcAge(birthYear) {
  let age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, your age is ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Nishu';
      const str = `oh, a millenial, ${firstName}`;
      console.log(str); //Now the firstName will be nishu because js will look for firstName variable inside the current scope.
      function add(a, b) {
        return a + b;
      }
    }
    output = 'New Output';
    //    console.log(add(2, 3))//Refrence error cause functions are also block scoped but only in 'strict mode'.function inside a block is function scoped and can be called outside of block when we dont use 'strict mode'
    // console.log(str); We get a refrence error!
    console.log(millenial); //We dont get an refrence error because let and const are block scoped variables.
    console.log(output); //Now output in 'New Output'
  }
  //   console.log(millenial); Refrence error bc millenial defined inside the child function
  //   console.log(output);//refrence error
  printAge();
  return age;
}
//printAge() Refrence error
// console.log(age); refrence error age is not defined
// printAge() printAge is not defined.
const firstName = 'kapil';
calcAge(1991);

//TDZ - TEMPORAL DEAD ZONE.
const myName = 'kapil';
if (myName === 'kapil') {
  // const about = `my name is ${myName} and my job is ${job}`; //Error job is not initialised.
  const firstName = 'kapil';
  const lastName = 'choudhary';
  // Here in this block scope the above area where job can not be accessed bc its not defined is called TDZ. We cannot access job variable even though it is in the same scope before its defined. So the zone in which a variable can not be accessed even if it is in the same scope is called is called TDZ.
  // So every let and const has a temperol dead zone (TDZ) starting from the begining of the scope and ending where it is defined.
  // TDZ makes the const variables work. if const variabless value is set to undefinedd initially it can not be reassigned. So it is only assigned when the execution reaches the decleration.
  
  // const job = 'Student';
}
console.log('------------------------------------------');
// console.log(me); //Undefined because var are initially hoisted but with the value to undefined.
// console.log(job); //It is in TDZ so we get error "can't access lexical declaration 'job' before initialization"
// console.log(year); //It is in TDZ so we get error "can't access lexical declaration 'year' before initialization"

var me = 'kapil';
let job = 'student';
const year = 1991;

//Function

// console.log(addDecleration(2, 3)); // 5
// console.log(addExpression(2, 3)); //error can't access lexical declaration 'addExpression' before initialization
// console.log(addArrow(2, 3)); // error addArrow is not a function because var variables is hoisted and its value is undefined and undefined is not a function.

function addDecleration(a, b) {
  return a + b;
}
const addExpression = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

//Example
if(!numProducts) deleteShoppingCart()
var numProducts = 10
function deleteShoppingCart(){
  console.log('All products deleted');
}


// console.log(this); //Window object
const calAge1 = function (birthYear) {
  // console.log(2022 - birthYear); //20
  // console.log(this); //Here it is undefined
};
calAge1(2002);
const calcAgeArrow = (birthYear) => {
  // console.log(2022 - birthYear);
  // console.log(this); // Here we will get 'window object' because arrow function does not get its own this keyword instead it uses lxical this keyword or its parent function or parent scope this keyword.
};
calcAgeArrow(2006);

const kapil = {
  firstName: 'kapil',
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year); //Here 'this' is kapil
  },
};
kapil.calcAge();

const nishu = {
  year: 2006,
}
nishu.calcAge = kapil.calcAge 
nishu.calcAge() //This keyword always points to the object which is calling the method.


//Regular function vs arrow function

var firstName = 'nishu'; //Var creates a property in window object
const kapil = {
  firstName: 'kapil',
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);
    //Solution 1
    // const self = this
    // const isMillenial = function(){
    //   // console.log(this.year >= 1981 && this.year <= 1996);//We get an error.We get error because regular function gets its own this keyword in which year is undefined.
    //   console.log(self.year >= 1981 && self.year <= 1996);//Now it will work fine ass we have access to this keywordd of parent scope.

    // }
    //Solution 2
    //Here we can use arrow function as it uses its parents this keyword which is this keyword of calcAge.
    const isMillenial = () => {
      
      console.log(this);//
      console.log(this.year >= 1981 && this.year <= 1996);//Now it will work fine as we have access to this keyword of parent scope.

    }
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hello ${this.firstName}`); //We get 'Hello nishu' because here this keyword is for arrow function's parents scope which is window object and we know that var kaeyword creates a property in window object. So we get firstName as 'nishu'. Let and const does not create any property in window object so if we would have used let or const keyword to define the variable then we would get 'Hello undefined'.
  },
};
kapil.greet();
kapil.calcAge();
// console.log(this.firstName); //We get 'undefined', when we try to acces a property which does not exist we get undefined insteadd of error.

//Arguments keyword

//Argument keyword exist only for regular function not for arrow functions.

const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(2, 5)
addExpression(2, 5, 8)

//
var addArrow = (a, b) =>{
  console.log(arguments);
  return a + b
}
addArrow(2,8, 5)


//Primitives vs objects (Primitive vs refrence types)

//Here we will learn the diffrence in primitive types and objects type are stored in the memory.

let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30

const me = {
  firstName: 'kapil',
  age: 30,

};
const friend = me
friend.age = 22
console.log('Friend' ,friend);
console.log('Me' ,me);
//All our objects or refrence types(object literal, function, array, many more) are stored in the memory heap on the other hand premitive or primitive types are stored in the call stack.
*/
//Priitive types

let lastName = 'kumar'
let oldLastName = lastName
lastName = 'choudhary'
console.log(oldLastName, lastName);

//Refrence types
const nishu = {
  firstName: 'nishant',
  lastName: 'kumar',
  age: 17,
}
const newNishu = nishu
newNishu.lastName = 'choudhary'
//Both newNishu and nishu points to the single value which is the address of the object 'nishu' in memory heap.
console.log('Before', nishu); 
console.log('After', newNishu);

//Copying object
const nishu2 = {
  firstName: 'nishant',
  lastName: 'kumar',
  age: 17,
  family: ["kapil", 'jaisingh', 'suman'],
}

const nishuCopy = Object.assign({}, nishu2) //Object.assign({}, nishu2) creates  a new empty object which is created in the memory heap in which value of object 'nishu2' is copied. >assign creates a shallow copy not deep clone or it only copies properties in level one. In this example it does not copies the 'family' array. 
nishuCopy.lastName = 'Choudhary'
nishuCopy.family.push('kannu')

//Family is an object nested into 'nushu2' and 'nishuCopy' but both of these family arrays point to a single address or single object in memory heap so 'kannu' is pushed to the object in memory heap to which both 'nishu2' and 'nishuCopy' points so in both of the family arrays 'kannu' is present.
console.log('nishu2', nishu2);//Here we see that 'kannu' is pushed to the family string in object 'nishu2' and 'nishuCopy'
console.log('nishuCopy', nishuCopy);

