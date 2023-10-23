// As we have seen above we can write an statement in three types.
// Important-Ternary operator is not an replacement of if/else statement.
// let x = 8;
// console.log(x === 8 ? "Hello" : "No Hello");
// let y = (x) => console.log(x);
// y(x);

let arr = [1, 5, 9, 10, 15];
let [ant, , cat] = arr;
console.log(ant, cat);
[ant, cat] = [cat, ant];
console.log(ant, cat);
