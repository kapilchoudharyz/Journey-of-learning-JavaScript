/* let js = "Amazing";
 if (js === "Amazing") alert("Javascript is FUN");
 10 + 32 + 8;
console.log(10 + 32 + 8);
console.log(23);
console.log("Kapil");
let firstName = "kapil";
console.log(firstName);
let PI = 3.1415;
*/

// DATA TYPES
/* let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 25195652645n);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991
console.log(year);
console.log(typeof year);

console.log(typeof null) //It logs out that it is object which is a bug.


//Let,var and const
let age = 30;
age = 42;

const birtYear = 1991; //const can not be reassigned.We can not leave variable in const without declaring.

var job = "programmer";
job = "student";

//Operators in js
//Arithematic operatore
const currenYear = 2022;
const ageKapil = currenYear - 2002;
const ageNishu = currenYear - 2006;
console.log(ageKapil, ageNishu);

console.log(ageKapil * 2, ageNishu / 10, 2 ** 3);
// 2**3 means 2 to the power 3.

const firstName = "kapil";
const lastName = "choudhary";
console.log(firstName + " " + lastName);
//Assignment operators
let x = 10 + 5; // = operator.
x += 10; //+= means that x = x + 10.
x *= 4; //*= means that x = x * 4.
x++; //which means x + 1
x--; //Which means x - 1
console.log(x);
//Comparison operators
console.log(ageKapil > ageNishu);
console.log(ageKapil < ageNishu);
console.log(ageKapil <= 18);
console.log(ageNishu <= 18);
const isFullAge = ageNishu >= 18
console.log(currenYear - 2006 < currenYear - 2002)


//Operator precedence
const currenYear = 2022;
const ageKapil = currenYear - 2002;
const ageNishu = currenYear - 2006;
console.log(currenYear - 2006 < currenYear - 2002); //mathematical operations are done before the comparison operators always.
let x, y;
x = y = 25 - 10 - 5; // x = y = 10 =>Assignment opertaor(=) has lower preferance than mathematical operations.
console.log(x, y);
const averageAge = (ageKapil + ageNishu) / 2;//bracket has the highest precedence.
console.log(ageKapil, ageNishu, averageAge);

//TEMPLATE LITERALS
let firstName = "Kapil";
let lastName = "Choudhary";
let birthYear = 2001;
let currentYear = 2022;
let kapil =
  "I'm " +
  firstName +
  " " +
  lastName +
  " , a" +
  (currentYear - birthYear) +
  "year " +
  "old " +
  "student";
console.log(kapil);
//writing the above code using template literals;

let kapilNew = `I'm ${firstName} ${lastName} a ${
  currentYear - birthYear
} year old student.`;
console.log(kapilNew);

console.log("This is a \n\
multiline \n\
string");
//or
console.log(`this is a 
multiline string`)


//if/else statements in javascript. below structure is called controlled structure.
let age = 19;
let minimumAge = 18;

if (age >= minimumAge) {
  console.log("You are eligible for driving licence 😇");
} else {
  let ageLeft = minimumAge - age;
  console.log(
    `you are not eligible for driving licence 🤡, you can come back after ${ageLeft} year 😇`
  );
}

let birthYear = 1900;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//Type conversion and type coercion in javascript.

//coercion -When js automatically converts types.
//conversion -When we manually convert type.
//Type conversion
let inputYear = "2001";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("jonas")); //output will be NaN(Not a Number)
console.log(typeof NaN); // Output will be number
console.log(String(78));
// Type coercion
console.log("I am " + 20 + " years old"); //Number is converted to string.
console.log("I am " + "20" + " years old");
console.log("I am " + Number(20) + " years old"); //Number is converted to string.
console.log("23" - 10 - "3"); // - triggers opposite conversion and converts string to number
console.log("23" + 3); //Here number is converted to strig.
console.log("23" * 2); //Output will be 46 as string is converted to nummber
console.log("230" / 23); //Output will be 10 as string is converted to number

//Note !important
//1.Multiplication, subtraction and devide operation can only be applied to numbers so strings are converted to number to complete the operation.
//2.In case of addition number is converted to string as Addition is also used to add another variable or string which is not the case with other operators.

let n = "1" + 1; //Here number is converted to string which will become  "11"
n = n - 1; //Here n = "11" will be converted to number and so 11 - 1 = 10
console.log(n); //Output will be 10
console.log(3 + 4 + "9") //Output will be 79
console.log(3 + 4 - 4 + "9") //Output will be 49


//Truthy and falsy values.

//Falsy values in javascript :- 5 falsy values.- 0, "", undefined, null, NaN.
//Above values will give output as false when converted to boolean.
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean("-8"));
console.log(Boolean({}));
let money = 0;
if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job.");
} // here output will be else statement because 0 is a falsy value so falsy values are executed in else statement.

let currentBalance = 100;
if (currentBalance) {
  console.log("Don't spend it all.");
} //Here if statement is executed because truthy values are executed in if statement.
else {
  console.log("You should get a job.");
}
let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is not defined");
} //since height is undefined so height is a falsy value so else statement is executed


//Equality operator == vs ===

const age = "18";
if (age === 18)
  // === is strict equality operator,This operator does not do type coercion.
  console.log("You are an adult,Strict operator."); // == is loose equality operator,This operator does use type coercion.for e.g. - "18" == 18 will be true but "18" === 18 is false because in case of === type coercion is not used.
if (age == 18) console.log("You are an adult, loose operator.");
const favouriteNumber = Number(prompt("What's your favourite number.")); //The number we put in prompt is stored as a string.So we used type conversion to convert it to a number.
console.log(favouriteNumber);
console.log(typeof favouriteNumber);
if (favouriteNumber === 23) {
  console.log("cool, 23 is a great number");
} else if (favouriteNumber === 20) {
  console.log("20 is also a great number");
} else if (favouriteNumber === 9) {
  console.log("9 is also a great number");
} else {
  console.log("You didn't chose 7 or 23 or 9");
}

if (favouriteNumber !== 23) //!== means not equal to 23 (strict version), != means not equal to(loose version)
 console.log("why not 23"); //If favourite number is equal to 23 then previous line of code for favouritenumber === 23 is executed.


//boolean logic
//Basic boolean logic: The AND, OR and NOT operator.
const goodVision = true;
const hasDriversLicence = true;
console.log(goodVision && hasDriversLicence); //&& is AND operator
console.log(goodVision || hasDriversLicence); //|| Is OR OPERATOR
console.log(!goodVision); //! is NOT operator.

// if (goodVision && hasDriversLicence) {
//   console.log("You can drive");
// } else {
//   console.log("You should not drive");
// }
const isTired = false;

console.log(goodVision && hasDriversLicence && !isTired); //&& is AND operator
console.log(goodVision || hasDriversLicence || isTired); //|| Is OR OPERATOR
console.log(!goodVision); //! is NOT operator.
if (goodVision && hasDriversLicence && !isTired) {
  console.log("You can drive");
} else {
  console.log("You should not drive");
}

//There are two gymnastics teams, Dolphins and Koalas. They compete against each
//other 3 times. The winner with the highest average score wins a trophy!
let dolphinsScore = 96 + 108 + 89;
let koalasScore = 200 + 91 + 110;
let dolphinsAverageScore = dolphinsScore / 3;
let koalasAverageScore = koalasScore / 3;
console.log(dolphinsAverageScore)
console.log(koalasAverageScore)

if (dolphinsAverageScore > koalasAverageScore) {
  console.log("Dolphins have won this match");
} else if (dolphinsAverageScore === koalasAverageScore) {
  console.log("This match was a draw between dolphins and koalas");
} else if ( dolphinsAverageScore < koalasAverageScore){
  console.log("Koalas have won the match.");
}


//The Switch statement.--Alternate to if else statement.
const day = prompt("What is your favourite day");

switch (day) {
  case "monday": //day === "Monday"
    console.log("Today i have to watch a movie");
    console.log("Watch a webseries.");
    break; //Without break code is kept executing till the next break
  case "tuesday":
    console.log("Learn javascript.");
    console.log("Practise some javascript.");
    break;
  case "wednesday":
  case "thursday":
    console.log("Practise some css"); //This line of code will be executed for both case "Wednesday and "thursday"
    break;
  case "friday":
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
}
//Rewriting the same code with the help of if else statement
if (day === "monday") {
  console.log("Today i have to watch a movie");
  console.log("Watch a webseries.");
} else if (day === "tuesday") {
  console.log("Learn javascript.");
  console.log("Practise some javascript.");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Practise some css");
} else if (day === "friday" || day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("not a valid day");
}


//Diffrence between statement and expression.
// Expression - A piece of code that produces value for example - 3 + 4, true && false && !false, 82
3 + 4;
82;
true && false && !false;
//stattement - A piece of code that does not produce any value itself ex - if else statement, switch statement
if (89 > 10) {
  const str = "89 is greater than 10";
}


//The conditional(Ternary) operator
//We can write an if else statement in  one line using the below conditional operator.
const age = prompt("What is your age?");
// age >= 18 //It is called ternary operator because it has three parts first - condition
//   ? console.log("I would like to have a drink.") //second - If part
//   : console.log("I would like to have some water"); //Third - else part
//Above is an operator and an operator always produces an value so we can assign it to a variable which we can do as below.
const canDrink = age >= 18 ? "Alcohol." : "water.";

//We can do the same thing using the if else statement as well
console.log(`I would like to have some ${canDrink}`); //We can not put a statement(ex- if else statement) inside a template liteeral but we can store an  ternary operator in a variable and then we can put the variable inside an template literal because it produces a value.
let canDrink2;
if (age >= 18) {
  canDrink2 = "I would like to have a drink.";
} else {
  canDrink2 = "I would like to have some water.";
}
console.log(canDrink2);
let myAge = prompt("What is my age");
switch (myAge) {
  case myAge >= 18:
    console.log("you can have alcohol.");
    break;
  default:
    console.log("you can have some water.");
}
//As we have seen above we can write an statement in three types.
//Important-Ternary operator is not an replacement of if/else statement.
*/

//Javascript releases - ES5, ES6+, ESNEXT

// let kapil = {
//   firstName: "Kapil",
//   lastName: "Kumar",
//   fun(firstName) {
//     console.log("This is Working");
//   },
//   arr: (arrowFunction) => console.log(arrowFunction),
// };
// kapil.fun(kapil["firstName"]);
// console.log(kapil.lastName);
// let x = (parameter) => console.log(parameter);
// x("parameter");
// kapil.arr("This is arrow function inside an object");

// var mergeAlternately = function (word1, word2) {
//   let output = "";
//   if (word1.length > word2.length) {
//     for (let i = 0; i < word1.length; i++) {
//       if (word2[i]) {
//         output += word1[i].concat(word2[i]);
//       } else {
//         output += word1[i];
//       }
//     }
//   } else if (word2.length > word1.length) {
//     for (let i = 0; i < word2.length; i++) {
//       if (word1[i]) {
//         output += word1[i].concat(word2[i]);
//       } else {
//         output += word2[i];
//       }
//     }
//   } else {
//     for (let i = 0; i < word1.length; i++) {
//       output += word1[i].concat(word2[i]);
//     }
//   }
//   return output;
// };
// console.log(mergeAlternately("abcde", "pqrs"));
// console.log([1].length);

// Array.prototype.last = function () {
//   return Array[1];
// };
// console.log([1, 2, 3].last());

// let arr = [1, "kapil", true];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(typeof arr[i]);
// //   if (typeof arr[i] !== "string") break;
// // }

// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   // j++;
// }

