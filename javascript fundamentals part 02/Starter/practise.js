// Below is the example of decleration function.
// function age(currentYear, birthYear) {
//     let age = `Your current age is ${currentYear - birthYear}`
//     return age
// }
// console.log(age(2020, 2000))

// Below is example of expression function

// let age = function (currentYear, birthYear) {
//     return `Your age is ${currentYear - birthYear} years.`
// }
// let myAge = age(2020, 2006)
// console.log(myAge)

// Below is example of arrow function
// let age = (currentYear, birthYear) =>
//   `Your current age is ${currentYear - birthYear}`;
// let myAge = age(2016, 2010)
// console.log(myAge)

// Below is example of arrow function to write multiple lines of code insode a function.

let retirement = (firstName, birthYear) => {
  let currentAge = 2022 - birthYear;
  let timeLeftToRetire = 65 - currentAge;
  return timeLeftToRetire;
};
let timeLeftToRetire = retirement("Kapil", 2001);
console.log(timeLeftToRetire);
