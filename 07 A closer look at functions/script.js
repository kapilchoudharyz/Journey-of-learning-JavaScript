'use strict';

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassanger = 1,
  price = 199 * numPassanger
) {
  //es5 way of defining the default values but after es6 we can set default parameters as above.
  //   numPassanger = numPassanger || 1;
  //   price = price || "$199";
  const booking = {
    flightNum,
    numPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, "$299");
createBooking("LH123", undefined, 1000); //We can skip a default parameter by setting it to undefined in that case default value of the parameter will be used.
*/
/*
const flight = "LH234";
const kapil = {
  name: "Kapil Choudhary",
  passport: 24854196,
};
const checkIn = function (flightNum, passanger) {
  flightNum = "LH999";
  passanger.name = "Mr. " + passanger.name;
  if (passanger.passport === 24854196) {
    alert("Check in");
  } else {
    alert("Wrong passport number.");
  }
};
checkIn(flight, kapil);
console.log(flight); //LH239 flight variable was not changed by the function.
console.log(kapil); // Object { name: "Mr. Kapil Choudhary", passport: 24854196 } name was changed by function. because kapil is refrence type. So the passanger.name is same as doing kapil.name .

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(kapil);
checkIn(flight, kapil);
console.log(kapil);
*/

/*
//First class functions and higher order functions.

//First class functions : javscript treats functions as first class citizens. This means that function are simply values. Functions are just another type of object.

//First class function is just a concept that all the functions in js are just values.

//Higher order function : A function that receives another function as an argument, that returns a new function or both is said higher order function. This is only possible because of first class function

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fun) {
  console.log(`Original string: ${str}`);
  console.log(`transformed string: ${fun(str)}`);
  console.log(`Transformed by: ${fun.name}`);
};

transformer('Javascript is the best', upperFirstWord);

transformer('Javascript is the best', oneWord);
*/

/*
//Functions returning other function.

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');

//greet('hey') returned a new function which we stored in greeterHey variable. So now greeterHey is just a function which can be called as below.
greeterHey('Kapil'); // Hey Kapil
greeterHey('Nishu'); // Hey Nishu

//As we saw above that greet('Hello') returned a new function so we can call the new function which was returned by greet('Hello) immediately using another parenthesis like below.
greet('Hello')('Dikshit'); //Hello Dikshit

//We can write an arrow function returning another arrow function using arrow function as below.

const greetNew = (message) => (name) => console.log(`${message} ${name}`);

greetNew('good morning')('Kayan');

*/

/*


//The call and Apply methods.

//Setting the this keyword manually

const lufthansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(),
  book(flightNum, name) {
    console.log(
      `${name} booked a sheet on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //name is property Name and it's value is the value of name variable.
  },
};
lufthansa.book(239, 'Kapil Choudhary'); // Output:  Kapil Choudhary booked a sheet on Luftansa flight LH239 script.js:113:13
lufthansa.book(635, 'Nishu Choudhary'); // Output:  Nishu Choudhary booked a sheet on Luftansa flight LH635
console.log(lufthansa.bookings);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//Below Does not work
// book(23, 'hello'); //Error: this is undefined.

//Call method
book.call(euroWings, 23, 'kapil kadayan');

//What happened above is that we called the call method which called the book function with this keyword set to euroWings. So we used call() method to manually and explicitly set this keyword.
book.call(lufthansa, 688, 'Nishu kadayan');
console.log(euroWings);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 685, 'kayan choudhary');

//Apply method

//Apply method also same as call method but it takes the argument of the function as an array.

book.apply(swiss, [999, 'Dikshit Choudhary']);
let flightData = [199, 'Suman'];

book.apply(lufthansa, flightData);
//We don't use apply in modern js because we can use call method and use spread method if we have data inside an array.
book.call(swiss, ...flightData);
*/

/*
//Bind Method

book.call(euroWings, 25, 'Jai Singh');

//Just like call method bind method also set the this keyword manually.The diffrence is that it does not immediately calls the function but instead it returns a new function in which the this keyword is bond by the bind method manually.

const bookEW = book.bind(euroWings);

//What happened above is that we used bind method to set the this keyword to euroWings and the book.bind(euroWings) returns a new function in which the this keyword is set to euroWings. Then this new function in stored inside a variable 'bookEw' which we called below.

//We can also do it as below

const bookLX = lufthansa.book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookLX(699, 'Bob lee');
bookEW(685, 'Bob the Builder');

const bookEW23 = book.bind(euroWings, 23);
//As shown above we can also set the parameter. Above we have set the first parameter of the function.So we can call it as below.This is how we can create a function for flightNum = 23

//There is a common pattern called partial application which we used above. What partial application means is that arguments of the original functions are already applied or already set.
bookEW23('Jack dorsy');

//Using the bind method with Event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes); //NaN if we simply called lufthansa.buyPlane because in eventhandler function this always points to the element on which eventhandler is attached to but we can use bind method to set the this keyword to lufthansa as:- lufthansa.buyPlane.bind(lufthansa).
};
//Important.
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 200));

const addGST = addTax.bind(null, 0.18);
// addGST = (value) => value + value * rate; //By using the above bind method and partial application out addGST function will look like.
console.log(addGST(1000)); //118

const GST = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const totalValue = GST(0.2);

console.log(GST(0.3)(500));
console.log(totalValue(23));
*/

/*
//Immediately invoked function expression (IIFE)

const runOnce = function () {
  console.log(
    'This is regular function which can be later called in the code.'
  );
};
runOnce();

//IIFE : The function which we want to execute just once and never again. We can create such functions as below.

(function () {
  //IIFE
  const isPrivate = 55;
  console.log('This will never run again: Regular function IIFE');
})();

(() => console.log('This will never run again- Arrow function IIFE'))(); //IIFE

//IIFE was used for data privacy or to hide data inside a variable but after es6 IIFE are not that useful because now we can create a block as below if we want to hide some data.

{
  const isprivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate); //46 bc variable created inside block scope with var keyword can be accesed in global scope.
// console.log(isprivate); //Error bc isprivate is inside the block scope not on global scope so can't be accessed.
*/

/*

*/

/*
//Closures: We don't create closures manually like an array or object closures automatically happens in certain si`tuations which we have to recognise.

const secureBooking = function () {
  let passangerCount = 0; //This variable can not be accesed from outside.
  return function () {
    passangerCount++;
    console.log(`${passangerCount} passanger`);
  };
};
const booker = secureBooking(); // secureBooking() will return the another function which will be stored in this booker variable.

//Note: A function has access to all the variable environment of the execution context in which it was created even after the execution context is gone from the call stack.

//The closure is basically the variable environment of secureBooking booking which is attached to the booker function exactly as it was at the time and place that the secureBooking function was created.

//So due to closure the booker function can access passangerCount variable from the secureBooking function even though the execution context of secureBooking function is gone from the call stack.

//Closure has priority over scope chain. Even if the passangerCount variable existed in the global scope the engine will first look into closure.

//Diffrent analogy or definition of closure.

//The closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

//A closure gives a function acces to all the variables of its parent function, even after that parent function has returned. The function keeps a refrence to its outer scope, which preserve the scope chain through time.

//A closure makes sure that a function does not loose connection to variable that existed at the function's birth place.

booker(); //1 passanger
booker(); //2 passanger
booker(); //3 passanger
booker(); //4 passanger
console.dir(booker); //We can take a look at closure but we can not access closure anyhow.
*/

//Some more Closures example

//We dont need to a return from another function to create a closure.

//Example 1

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 14;
  f = function () {
    console.log(b * 2);
  };
};
console.dir(f);
g();
//Even if the g is gone from execution context but f still have acces to the variables defined in g function. so the f function really does close over any variables of the execution context in which it was defined even if the f was not defined in the g's variable environment.
f();
//Re-Assigned f function.

//Now closure is changed and closure conatin variable b = 14 from h()
h();
f(); // 28
console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passanger.`);
    console.log(`There are 3 groups each with ${perGroup} passangers.`);
  }, wait * 1000); //First argument is a function which will run after certain time(milliseconds) and second argument is time after which the function will run. setTimeout is a callback function.

  //So this function inside setTimeOut function is executed after 5 secods completely independent from the boardPassangers function but still it was able to use all the variables(n and perGroup) that were in the environment in which it was created.So this is a sign of a closure being created.

  //So the only way in which this callback function here can have access to the variables that are defined in the board passengers function that has long finished execution is if it created a closure.
  console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000;
//the callback function will not use above variable because we know that closure has priority over scope chain.
boardPassengers(185, 5);
