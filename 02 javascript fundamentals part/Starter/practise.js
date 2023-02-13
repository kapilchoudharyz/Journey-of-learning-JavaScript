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

// let retirement = (firstName, birthYear) => {
//   let currentAge = 2022 - birthYear;
//   let timeLeftToRetire = 65 - currentAge;
//   return timeLeftToRetire;
// };
// let timeLeftToRetire = retirement("Kapil", 2001);
// console.log(timeLeftToRetire);
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   // getSummary: function () {
//   //   return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   // }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

let aboutMe = {
  firstName: "kapil",
  lastName: "kumar",
  job: 'student',
  birthYear: 2001,
  
  
  
}
aboutMe.age = 2022 - aboutMe.birthYear
// console.log(aboutMe.ageCalculater())
// aboutMe.age = aboutMe.ageCalculater
console.log(aboutMe)

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

