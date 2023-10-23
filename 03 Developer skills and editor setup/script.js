// `use strict`;

// //Problem 1:
// //We are working for a company that makes smart home thermometer. Our most recent task is this: 'Given an array of tempratures of one day, Calculate the temprature amplitude, sometimes their might be an sensor error

// const tempratures = [3, -2, -6, -1, "Error", 9, 17, 15, 14, 9, 5];
// // 1.Understanding the problem
// //What is amplitude - Diffrence between highest and lowest temprature in array.

// //How to find/cal highest and lowest temprature in an array.

// //3What to do for error.
// //2. Tasks to do

// //Find max temp in array
// //Find min temp in array
// //Ignoring the error
// //calculating the amplitude
// // const calcTemp = function (temps) {};
// let tempCalculator = function (temp) {
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== "number") continue;
//     if (temp[i] > max) {
//       max = temp[i];
//     }
//     if (temp[i] < min) {
//       min = temp[i];
//     }
//   }
//   let amplitude = max - min;
//   return [max, min, amplitude];
// };
// // let ampl = tempCalculator(tempratures[0]);
// console.log(tempCalculator(tempratures));
// // console.log(ampl);
// let data = tempCalculator(tempratures);
// let amplitude = data[2];
// console.log(amplitude);

// //Problem 2:

// //function should now receive two arrays of data.
// //With two arrays do we have to implement same functionality twice? Just merge both arrays
// //How to merge two arrays.
// let tempData1 = [18, 18, 2, 3, -6];
// let tempData2 = [18, 8, 21, 35, -5, 18];

// let tempCalculatorNew = function (t1, t2) {
//   let temp = t1.concat(t2);
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== "number") continue;
//     if (temp[i] > max) {
//       max = temp[i];
//     }
//     if (temp[i] < min) {
//       min = temp[i];
//     }
//   }
//   let amplitude = max - min;
//   return [max, min, amplitude];
// };
// // let ampl = tempCalculator(tempratures[0]);
// console.log(tempCalculatorNew(tempData1, tempData2));
// // console.log(ampl);
// let dataNew = tempCalculatorNew(tempData1, tempData2);
// let amplitudeNew = dataNew[2];
// console.log(amplitudeNew);

//Debugging

// const measureKelvin = function () {
//   const measurement = {
//     type: "Temprature",
//     unit: "Celcius",
//     value: prompt("Degree in celcius:"),
//     // value: Number(prompt("Degree in celcius:")), //We change it here or we can change it below as well.
//   };
//   // console.log(measurement) // Here in console we found that prompt returns the string so we have to change it to number
//   console.table(measurement); // Here in console we found that prompt returns the string so we have to change it to number
//   console.log(measurement.value);
//   // console.warn(measurement.value)
//   // console.error(measurement.value)
//   const kelvin = Number(measurement.value) + 273; //Here we converted the value returned by prompt as a string to a number.
//   return kelvin;
// };
// //A) Identify the bug
// console.log(measureKelvin());

//

let tempData1 = [18, 18, 2, 3, -6];
let tempData2 = [18, 8, 21, 35, -5, 18];

let tempCalculatorBug = function (t1, t2) {
  let temp = t1.concat(t2);
  let max = 0; //Let us assume max and min are 0
  let min = 0;
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== "number") continue;
    if (temp[i] > max) {
      max = temp[i];
    }
    if (temp[i] < min) {
      min = temp[i];
    }
  }
  console.log(max, min)
  let amplitude = max - min;
  return [max, min, amplitude];
};
// let ampl = tempCalculator(tempratures[0]);
console.log(tempCalculatorBug([2, 3, 5], [5, 8, 3]));//For this case it is not working properly.
// console.log(ampl);
// let dataBug = tempCalculatorBug(tempData1, tempData2);
// let amplitudeBug = dataBug[2];
// console.log(amplitudeBug);
