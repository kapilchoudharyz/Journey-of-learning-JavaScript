// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();
// console.dir(f);

// function solve(N, workload) {
//   // You must complete the logic for the function that is provided
//   // before compiling or submitting to avoid an error.

//   // Write your code here
//   let newArr = [];
//   for (let i = 0; i < workload.length; i++) {
//     if (workload[i] > 6) {
//     }
//   }
//   return newArr.length;
// }
// console.log(solve(13, [12, 10, 4, 8, 9]));
/*
let arr = [5, 8, 7, 10];
let cont = arr.forEach(function (ar, i, arr) {
  console.log(arr);
  return ar * 4;
}); //a for loop returns undefined.
console.log(cont);
*/

//* Coding challenge

//sort an array which is mix of number and string

let arrstr = [25, 8, 56, 'kapil', 'nishu'];

console.log(typeof 8);
const sorted = (arr) => {
  let str = [];
  let num = [];
  arr.forEach((el) => {
    typeof el === 'number' ? num.push(el) : str.push(el);
  });
  console.log(str);
  console.log(num);
  str.sort();
  num.sort((a, b) => a - b);

  return num.concat(str);
};
console.log(sorted(arrstr));
