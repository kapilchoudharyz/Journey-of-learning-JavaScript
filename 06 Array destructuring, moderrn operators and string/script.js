`use strict`;
//Array destructuring
//Destructuring: it is a way of unpacking values from an array Or an object into separate variables.
const restaurent = {
  name: "AL italico",
  location: "JLN marg jaipur",
  categories: ["italic", "Organic", "Vegetarian"],
  starterMenu: ["Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//Instead of doing it above we can use array destructuring or unpacking as below

const [x, y, z] = arr;
// const [p,q] = arr
// console.log(p,q);
console.log("x", x, "y", y, "z", z);
console.log(arr);

let [main, , secondary] = restaurent.categories; //We can skip element by doing ', ,' so secondary will become the third element from the array.

console.log(main, secondary);//italic vegetarian

//So if we want to change secondary with main and main with secondary

// const temp = main
// main = secondary
// secondary = temp
// console.log('Simply interchanged', main, secondary);
//For the above task we can either use above method or use destructuring

[main, secondary] = [secondary, main];
console.log("Using destructuring", main, secondary);//Vegetarian and italic

//Receive two values from a function
const [starter, mainCourse] = restaurent.order(1, 2);
console.log(starter, mainCourse); //salad, risotto

//Nested destructuring
const nested = [5, 6, [1, 2]];
// const [i, , j] = nested;
// console.log(i, j);
//If we want to destructure nested arrays or if we want to put all the values in diffrent variables even the nested arrays.

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
//We can set default values if in case we don't know the length of array

const [p = 1, q = 1, r = 1, s] = [8, 9]; //Here as at [2] no value exist or undefined for r so we can set the default value of r = 1 if at [2] nothing exist(no element at position at [2]). p and q will be 8 and 9 because for p and q in array element exists so default values will not be triggered.s will be undefined bc we didn't set any default value for s.
console.log(p, q, r, s);
