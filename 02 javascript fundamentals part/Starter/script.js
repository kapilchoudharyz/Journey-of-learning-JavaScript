`use strict`;
/*
// 1.Activating strict mode
"use strict";
let hasDriversLicence = false;
const passTest = true;
if (passTest) hasDriverLicence = true;
if (hasDriversLicence) console.log("I can drive");
else console.log("You can not drive!")

//Functions in javascript.
//Function - A piece of code which we can use over and over again.It is little bit like variable but a whole chunk of code.
function logger() {
  console.log("My name is kapil");
}
//Calling, running or invoking the function
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges)
  const juice = `We would like to have ${apples} apples and ${oranges} oranges.`;
  return juice; //This value juice can be use anywhere in our code.
}
fruitProcessor(4, 0);
//To use the value returned by the function we have to store this above function in a variable or we can directly log it into the console.
const appleJuice = fruitProcessor(3, 8);
console.log(appleJuice);
// console.log(fruitProcessor(5, 8))
const appleOrangeJuice = fruitProcessor(10, 89);
console.log(appleOrangeJuice);

// function marksheet(maths, physics) {
//   let kapilsMarks = `Kapil got ${maths} in maths and ${physics} in physics.`;
//   let nishusMarks = `Nishu got ${maths} in maths and ${physics} in physics.`;
//   // return (kapilsMarks, nishusMarks) If we have multiole values and we  return these values like this then the only the last value is returned.IN this case only nishusMarks is returned.To return both variables We should return it as below
//   return [kapilsMarks, nishusMarks];
// }
// let marks = marksheet(
//   Number(prompt("Marks in maths")),
//   Number(prompt("Marks in physics."))
// );
// console.log(marks)


//Function decleration and expressions.
//Below is function decleration.
//Major diffrence between function decleration and expresion is that we can call function decleration even before defining them as shown below.
const age1 = calcAge_1(2000, 2022);
console.log(age1);
function calcAge_1(birthYear, currentYear) {
  // let personAge = `Your age is ${currentYear - birthYear} years.`;
  // return personAge;
  //We can do it as below as well, Its the same thing.
  return `Your age is ${currentYear - birthYear} years.`;
}

//Above example is of a function decleration.

//Below is function expression.
//we can not call function expression before defining them.We first have to define the function and then we call the function as shown below.
const calcAge_2 = function (birthYear, currentYear) {
  return `Your age is ${currentYear - birthYear} years.`;
}; //Using above method we get a value from expression which is stored inside the variable and we can use this variable in template literals later on.
const age2 = calcAge_2(1991, 2021);
console.log(age2);


//Arrow function - A form of function expression which is shorter and faster to write.
const calcAge_3 = (birthYear, currentYear) => currentYear - birthYear;
const age = calcAge_3(2000, 2022);
console.log(age);
const yearsUntillRetirement = (firstName, birthYear, currentYear) => {
  let age = currentYear - birthYear;
  let yearsUntillRetirement = 65 - age;
  return `${firstName} will retire after ${yearsUntillRetirement}`;
};
const retirement = yearsUntillRetirement("Kapil", 2000, 2022);
console.log(retirement);


//Functions calling other functions.
let cutPieces = function (fruit) {
  let noOfPieces = fruit * 4;
  return noOfPieces;
};

let fruitProcessor = function (apples, oranges) {
  let applePieces = cutPieces(apples);
  let orangePieces = cutPieces(oranges);
  let juice = `Get me juice of ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
};
let juiceOrdered = fruitProcessor(4, 6);
console.log(juiceOrdered);

//Arrays

const friend1 = "Vinit";
const friend2 = "Narayan";
const friend3 = "Prateek";
const friends = ["Vinit", "Narayan", "prateek"];
console.log(friends[0]);
//We can write an array as below as well
const year = new Array(1999, 2001, 2022, 3005, "Wars");
console.log(year[4]);
//Arrays are zero based, first element in array is  element number zero(0).
//We can find number of elements in an array  using length property as shown below
console.log(friends.length);
//Length property of array is not zero based it tells actual number of elements.

//We can find last elements in array as below.
console.log(friends[friends.length - 1]);
//We can mutate/change the array as below
friends[2] = "Manan";
console.log(friends);
//We can mutate arrays even though they were declareed in const. And we can not replace the entire array
//We can store diffrent data types inside an array
const firstName = "kapil";
const mySelf = [firstName, "Kumar", 2022 - 2000, true];
console.log(mySelf);

//exercise
const ageCalculator = function (Year) {
  let calculator = 2022 - Year;
  return calculator;
};
let birthYears = [2001, 2006, 2008, 2015];
let kapilAge = ageCalculator(birthYears[0]);
let nishuAge = ageCalculator(birthYears[1]);
let mannuAge = ageCalculator(birthYears[birthYears.length - 1]);


const ages = [ageCalculator(birthYears[0]), ageCalculator(birthYears[1]), ageCalculator(birthYears[birthYears.length - 1])];
console.log(ages)


//Basic arrays operations(Methods)

//Add elements

const friends = ["Vinit", "Narayan", "prateek"];
//we add element in an array at the end as below
friends.push("Manan");
// const newLength = friends.push("Manan"); //we can put this push method as shown in a variable to get the length of mutated array.
console.log(friends);
// console.log(newLength);
//We can add eliment at the starting of the array using unshift function
friends.unshift("Vaibhav"); //As push method unshift method also returns the length of improvised array.
console.log(friends);

//Remove elements

//We use pop method to remove element from the array
friends.pop(); //we dont have to pass any argument to remove.
const popped = friends.pop(); //pop method returns the removed element
console.log(popped);
console.log(friends);
//we use shift method to remove element from the begining of array
friends.shift(); //Shift method also returns the element removed from the array/

console.log(friends);

console.log(friends.indexOf('Narayan'))//We use indexOf to know the position of an element.
friends.push(10)

console.log(friends.includes("Vinit")) //includes returns true if element is in the array and false if element is not in the array.
console.log(friends.includes("kapil"))
console.log(friends.includes(10))//It does not uses type coersion ex. - "10" != 10

let isMyFriend = "Vinit"
if (friends.includes(isMyFriend)) {
  console.log("you are my friend.")
}
else{
  console.log("you are not my friend.")
}


//Objects in javascript.

const kapilArray = [
  "kapil",
  "kumar",
  2022 - 2001,
  ["vinit", "narayan", "prateek"],
  'jobless',
];
//We can not enter value pairs in an array and elements can be called by its position not by name.
//In object we can enter value pairs and can call data with its name.
const kapil = {
  firstName: "kapil", //here firstName is called property and 'kapil is called value
  lastName: "kumar",
  age: 2022 - 2001,
  fiends: ["vinit", "narayan", "prateek"],
  job: "jobless",
};

//Retriving and changing data with the help of dot and bracket notation.

const kapil = {
  firstName: "kapil", //here firstName is called property and 'kapil is called value
  lastName: "kumar",
  age: 2022 - 2001,
  friends: ["vinit", "narayan", "prateek"],
  job: "jobless",
};

// let lastName = kapil.lastName
// console.log(lastName)

console.log(kapil.lastName); //Dot notation.
console.log(kapil["lastName"]); //Bracket notation.

const nameKey = "Name";
console.log(kapil["first" + nameKey]);
console.log(kapil["last" + nameKey]);
//  So the diffrence between Dot and Bracket notation is that in bracket notation we can put any exprssions as shown in above example.In above example inside the square bracket "[]" first the string 'first' and value of nameKey are added which on using + operator the value in square bracket becomes firstName in first example and lastName in second example and then these properties are searched inside the object kapil. 
// In dot notation we can not use computed property name but in bracket notation we can use computed property name.

//We can not write an expression in an dot notation.
// console.log(kapil.'first' + nameKey) //This throws an error.

//Another use case of bracket notation is as below.
// const intrestedIn = prompt(
  //   "What do you want to know about kapil? Choose between firstName, lastName, job, friends and age."
  // );
  // console.log(kapil["job"]);
  // if (kapil[intrestedIn]) {
    //   console.log(kapil[intrestedIn]);
    // } else {
      //   console.log(
        //     "Sorry this property is not available. Choose between firstName, lastName, job, friends and age."
        //   );
        // }
        
        //We can add properties to object as below
        kapil.location = "India";
        kapil["state"] = "Rajasthan";
        console.log(kapil.state);
        kapil.twitter = "kapil_choudharyz";
        //Challenge
        //'Kapil has 3 friends and vinit is his best friend
        let str = `${kapil.firstName} has ${kapil.friends.length} and ${kapil.friends[0]} is his best friend`;
        let str2 = `${kapil['firstName']} has ${kapil['friends'].length} and ${kapil['friends'][1]} is his best friend`;
        console.log(str);
        console.log(str2);
        //We can get the number of properties in js as below
console.log(Object.keys(kapil));
//We can find the length of an object as below
console.log(Object.keys(kapil).length);
// console.log(kapil['fiends.length'])


const kapil = {
  firstName: "kapil", //here firstName is called property and 'kapil is called value
  lastName: "kumar",
  birthYear: 2001,
  friends: ["vinit", "narayan", "prateek"],
  job: "jobless",
  hasDrivingLicence: false,
  ageCalculator: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  // ageCalculator: function() {
  //   // console.log(this) //It logs this object kapil to console.
  //   return 2022 - kapil.birthYear
  // }
  // ageCalculator: function() {
  //   // console.log(this) //It logs this object kapil to console.
  //   return 2022 - this.birthYear //here this means this object which is kapil in this case.
  //  
  // }
  // getsummary: `${this.firstName} is a ${this.age} years old ${this.job} guy.` //We can not do this like this.
  getsummary: function() {
    return `${this.firstName} is a ${this.ageCalculator()} year old ${this.job} guy and ${this.hasDrivingLicence ? "has a driving licence" : " don't have a driving licence."}`//Here we used agecalculator instead of age because it is not necessary that the ageCalculator function is caalled before the getsummary function.
  }
};

// kapil.age = kapil.ageCalculator()
// console.log(kapil)
// kapil.age = kapil.ageCalculator()
//first we have to call the function.
kapil.ageCalculator()
console.log(kapil.age);
// //Coding challenge
//"kapil is a 21 year old jobless guy."
// kapil.getsummary = `${kapil.firstName} is a ${kapil.age} years old ${kapil.job} guy.`
console.log(kapil.getsummary())


//Iteration: The for loop // It is used for automation of certain piece of code for numerous time.
// for loop keep running untill the  condition is true.

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetation ${rep}`);
// }

//Looping arrays, breaking and continuing
let kapilArray = [
  "Kapil",
  "kumar",
  2022 - 2001,
  "India",
  "Rajasthan",
  ["Narayan", "Vinit", "Prateek"],
  true,
];
// console.log(kapilArray[0])
// console.log(kapilArray[1])
// console.log(kapilArray[2])
//...
// console.log(kapilArray[4])
let types = [];
for (let i = 0; i < kapilArray.length; i++) {
  console.log(kapilArray[i], typeof kapilArray[i]);
  //Filling types array
  // types[i] = typeof kapilArray[i]

  types.push(typeof kapilArray[0]);
}
console.log(types);

let birthYears = [2001, 2006, 2008, 2015];
let ages = [];
for (i = 0; i < birthYears.length; i++) {
  ages.push(2022 - birthYears[i]);
}
console.log(ages);

//Continue and break in for loops

console.log("----ONLY STRINGS----");
for (let i = 0; i < kapilArray.length; i++) {
  if (typeof kapilArray[i] !== "string") continue; //what continue does here is if the current iteration in this case if the typeOf kapilArray is not a string it imidiately exits the current iteration and continue to next one.
  //or here continue means if the conditionis followed skip.
  console.log(kapilArray[i], typeof kapilArray[i]);
}
console.log("----Break----");

for (let i = 0; i < kapilArray.length; i++) {
  if (typeof kapilArray[i] === "number") break; //what break does here is if the current iteration in this case if the typeOf kapilArray is a number it imidiately stops the process 
  console.log(kapilArray[i], typeof kapilArray[i]);
}

//Looping backwardss and loops in loops.



let kapilArray = [
  "Kapil",
  "kumar",
  2022 - 2001,
  "India",
  "Rajasthan",
  ["Narayan", "Vinit", "Prateek"],
];

//Looping  backward

for (let i = kapilArray.length - 1; i >= 0; i--) {
  // if (typeof kapilArray[i] !== 'string') continue;
  console.log(i, kapilArray[i], typeof kapilArray[i]); //We specified [i] in typeOf kapilArray because we want to know type of for every iteration count.
}

//Creating a loop inside a loop.
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------'Starting exercise' ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise} This is rep${rep}😂😂😂😂😂😂`);
  }
  //Here what happened is that first outer loop is executed for first iteration and then the inner loop is ececuted for its all iteration count.Then again the outer loop is excuted for its second iteration count and inner loop is executed for all its iterartion counts.
}
// for (let asked = 1; asked <= 36; asked++){
  //   console.log(`Laau ki naa ${asked}`)
  //   for(let i = 1; i <= 1; i++)
  //   console.log('No')
  // }
  */

// The while loop

//We use while loop when we don't know how many times loop will have to run. For those case senerios where we know how many time the loop have to run we use while loop.

console.log("----The for loop");
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Exercise 1 This is rep${rep}😂😂😂😂😂😂`);
}
console.log("----The while loop");
let rep = 9;
while (rep <= 10) {
  // console.log(rep);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice); //The loop would have zero iteration if we get 6 in the first roll of dice or the loop would never start because first the condition if the dice is !== 6 is true or not is checked if true the loop will start otherwise it will not start. 
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Finally you have got ${dice} and the loop is about to end!`);
  }
}
// In above loop  what happened was that first we created a variable dice outside of the loop and then we
