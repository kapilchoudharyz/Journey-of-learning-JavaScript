'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
let t0 = performance.now();
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; //We used slice to create the copy of movements array because we don't want to change the original array.

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}\u20AC</div>
    </div>
        `;
    //"afterbegin" parameter below: Just inside the element, before its first child.

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}\u20AC  `;
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov, i, arr) => {
      // console.log(arr);//For debugging.
      return acc + mov;
    }, 0);
  labelSumOut.textContent = `${Math.abs(out)}\u20AC`;
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);//For debugging
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}\u20AC`;
};

// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
createUsernames(accounts);
//Update UI
const updateUi = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
  // console.log(currentAccount.pin);
};
//Event Handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '100';
    //Clear input fields

    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    // The HTMLElement.blur() method removes keyboard focus from the current element.
    updateUi(currentAccount);
  }
  sorted = false;
});

// console.log(calcDisplayBalance(movements));

//Implementing Transfers

//Tasks

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  console.log(amount);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // calcDisplayBalance(receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(receiverAcc);
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // adding movements
    currentAccount.movements.push(amount);
    console.log('Working');
    //Updating UI
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('CLosed');
  console.log(currentAccount);
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    console.log('Working');
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// let t1 = performance.now();
// console.log(`${t1 - t0} milliseconds`);

//Theory

// containerMovements.insertAdjacentHTML('afterbegin', html)this method is used to insert html inside an element(here containerMovements)or  before an element using an argument beforebegin which inserts the html before the element with which it is used.In insertAdjacentHTML we give two arguments first one is position where we want to insert the new HTML(Existing html inside containerMovements is not removed.) and second argument is string containing HTML.

//Element.innerHtml:innerHtml returns all the html elements inside the Element while textcontent returns only the text.
// console.log(containerMovements.innerHTML); //Logs all the html inside containerMovements

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
/*
//Simple array methods.

//Methods:Methods are basically Functions that we can call on objects.

let arr = ['a', 'b', 'c', 'd', 'e'];

//slice method : Using this method we can extaract part of any array without changing the original arrray.
//So the slice method returns a new array and it does not change the original array.

// console.log(arr.slice(0)); //slice start from index 0
// console.log(arr.slice(2)); //slice start from index 2 :  [ "c", "d", "e" ]
//We can also define an end parameter
// console.log(arr.slice(2, 4)); //First argument is starting index and second argument is end index(end index is not included in slice) : [c, d] end index is not included but start index is included. length :end parameter - start parameter.
// console.log(arr.slice(-2)); //[d,e] Using negative parameter we get the elements from end.
// console.log(arr.slice(1, -2)); //['b', 'c'] : So here it starts extracting at index 1 and extrect till the last two elements.

//We can create a shallow copy of an array with slice method as below we dont have to pass any argument in slice method to create the shallow copy of an array.
// console.log(arr.slice());

//splice method:splice method works almost same as the slice method. But the diffrence is that splice method does change the original array or we can say mutates the original array.

// arr.splice(2); //removed all elements from index 2(incuding index 2)
// console.log(arr); //[ "a", "b" ] : because above splice method modified the original array.

arr.splice(-1); // deleted the last element from the array arr.
console.log(arr); // [ "a", "b", "c", "d" ]
//We use splice method to delete one or more element from the array.
// arr.splice(1, 2); //argument meaning: What it means is that from index 1(including element at index 1) remove 2 elements.
// console.log(arr);//[['a', 'd']];

//We can use a 3rd argument as below.

// arr.splice(1, 0, '8'); //It means that at index 1 remove 0 element and add '8' at index 1.  [ "a", "8", "b", "c", "d", "e" ]
// console.log(arr);
// arr.splice(2, 2, '27'); //It means that at index 2 remove 2 element and add '27' at index 2.
// console.log(arr); //[ "a", "8", "27", "d", "e" ]

// arr.splice(1);
// console.log(arr.slice(1));
// console.log(arr);

//Reverse method: Mutates the original array in which all elements are in reverse direction.

let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // [ "f", "g", "h", "i", "j" ]
console.log(arr2); // [ "f", "g", "h", "i", "j" ]
let arr3 = ['k', 'l'];

//Concat : Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const letters = arr.concat(arr2, arr3, 1, [2, 3]);
console.log(letters); //[ "a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", 1, 2, 3]

//Join method :returns a string of array on which applied joined with argument. arr.join(argument)

console.log(letters.join('')); // 'a-b-c-d-f-g-h-i-j-k-l-1-2-3'
*/
/*
//The new at method(ES2022)

const arr = [23, 11, 64];
console.log(arr[0]); //23
console.log(arr.at(0)); //23

console.log(arr[arr.length - 1]);
64;
//Getting the last array element
console.log(arr.slice(-1)[0]); //64
console.log(arr.at(-1)); //64 : negative value start counting from end of the array.
//at method works for strings as well.
console.log('kapil'.at(0)); //k
console.log('kapil'.at(-1)); //l

let newarr = [10, 20, 30, 40];
newarr.splice(0, 2, '15');
console.log(newarr);
*/

/*
//The forEach method.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  movement > 0
    ? console.log(
        `You deposited ${movement} and transection number is ${i + 1}`
      )
    : console.log(
        `You withdrew ${Math.abs(movement)} and transection number is ${i + 1}`
      ); //Math.abs removes the + ive or -ive sign of number
}
console.log('----FOREACH----');

//for each method

// what the forEach method does is to loop over the array,and in each iteration it will execute this callback function here. Also as the forEach method calls this callback function in each iteration.

//ForEach method not only passes the current element but also passes index and whole array as well as an argument to call back function.

//So the first argument in foreach loop is the current element, second argument is index of current element and third argument is the entire array that we are looping over

// movements.forEach(function (movement) {
//   movement > 0
//     ? console.log(`You deposited ${movement}`)
//     : console.log(`You withdrew ${Math.abs(movement)}`);
// });
movements.forEach(function (mov, i, arr) {
  mov > 0
    ? console.log(
        `You deposited ${mov}, transection number is ${
          i + 1
        } and all transection ${arr}`
      )
    : console.log(
        `You withdrew ${Math.abs(mov)}, transection number is ${
          i + 1
        } and all transection ${arr}`
      );
});

//the for each method calls the callback function in each iteration and pass in the arguments in this callback function.

//Diffrence between a for of loop and for each loop is that in a for each loop continue and break statement do not work.

//Practise example of for Each method
let sheet = ['Kapil', 'Vinit', 'Nishant'];
sheet.forEach(function (name, i) {
  console.log(`${name} your sheet number is ${i + 1}`);
});

//forEach method with Maps and Sets

//Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//Here first argument is callback function is value second argumet is key and third argument is the whole map which we are looping over.

currencies.forEach(function (value, key, map) {
  console.log(`${key}-${value}--${map}`);
});

//Sets

//A set doesn't have index and keys
const currenciesUnique = new Set(['USD', 'GBP', 'INR', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${_}-${value}--${set}`);
});
currenciesUnique.forEach(function (value) {
  console.log(`${value}`);
});
*/
/*
//Transforming Data with Map, Filter and Reduce method. These are methods we use to create new arrays based on transforming data from other Arrays.

//Map Method

//the map method is yet another way that we can use to loop over a array.But unlike for each, the map method will give us a brand new array and this new array will contain in each position the results of applying a callback function to the original array elements.
//The map method will return a brand new array.

const eurToUsd = 1.1;
// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUsd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);
//We can do above things using a for loop as well as below.
const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsd.push(mov * eurToUsd);
}
console.log(movementsUsdfor);

//Just like for each method map methods's callback function can have three arguments. First argument is the element of array which we are looping over, second one is the index of current element and third one is whole array which we are looping over.

const movementsDescription = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
  // if (mov > 0) {
  //   return `You deposited ${mov}, transection number is ${
  //     i + 1
  //   } and all transection ${arr}`;
  // } else {
  //   return `You withdrew ${Math.abs(mov)}, transection number is ${
  //     i + 1
  //   } and all transection ${arr}`;
  // }
);
// In the map method we pass in the callback function but do not call the function. It is called by the map method and each time it calls it, it pass in the argument current element of array, index of current element and the whole array.
console.log(movementsDescription);
*/
/*
//The filter Method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits); //[ 200, 450, 3000, 70, 1300 ]
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor); //[ 200, 450, 3000, 70, 1300 ]

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals); // [ -400, -650, -130 ]
console.log('----------------');

*/
/*
//The Reduce Method.

//The reduce method also loops over the array and calls the callback function in each iteration.

//In callback function of reduce method the first parameter is the accumulator.

//A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().

//After the function we can also set the value of the accumulater after the callback function. : .reduce(function(), accumulater)

//In each iteration what the callback function returns becomes the accumulater in next iteration.So the accumulater is like a storage which hold the previously returned values.
console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// });
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

//We can also get the same value as reduce method using for loop as below.
let balance2 = 0;
for (const mov of movements) {
  balance2 = balance2 + mov;
}
console.log(balance2);

//Maximum value

const maxNum = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log('maxNum', maxNum);
*/
/*
//Coding challenge #02
let dogAgeArr = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function (ageArr) {
  let humanYears = ageArr.map(function (age, i) {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  let adultDogs = humanYears.filter(function (age) {
    return age >= 18;
  });
  // let average =
  //   adultDogs.reduce(function (acc, age) {
  //     return acc + age;
  //   }, 0) / adultDogs.length;
  let average = adultDogs.reduce(function (acc, age, i, arr) {
    return acc + age / arr.length;
  }, 0);
  return average;
};
console.log(calcAverageHumanAge(dogAgeArr));
console.log(dogAgeArr.length);
*/
/*
//Finding deposits in usd.
const totalDepositsInUsd = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov,0);
console.log(totalDepositsInUsd);
*/

//Coding challenge #03
/*
const calcAverageHumanAge = function (ages) {
  let average = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return average;
};
let age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
let age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(age1, age2);
*/

//The Find Method.

//Just like the map,filter, and filter method find method also accepts a callback function.
//The find method is a bit like the filter method. As in the filter method the function returns the array of the elements which follows the condition specified in the callback function but in Find method- The fing method returns the first value which follow the condition specified inside the callback function.

//There are two fundamental diffrence between find method and filter method.
// 1. So the first diffrence is that the filter method returns all the elements which follow the condition while the find method returs only first element which follows the condition.
//2. The filter method returns a new array while the find method returns the element itself not the array.

//We can use the find the first positive/negative value inside an array using the find method.
/*
console.log(movements);

let firstWithdrawal = movements.find(function (mov) {
  return mov < 0;
});
console.log(firstWithdrawal);

let firstDeposit = movements.find(mov => mov > 0);
console.log(firstDeposit);
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let accountFor;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    accountFor = acc;
    break;
  }
}
console.log(accountFor);
console.log(movements);
*/
/*
 
// The findIndex Method

//The findindex of method is similar to indexof method but the major diffrence between them is that in findindexof method the argument we pass in is a function but in indexof method we pass in the value as an argument not the function. Below is the example in which we can see the diffrence between the two methods.
//Note: Both method returns the index of first value which satisfies the argument.
//Note:Both returns -1 if the index of passed in argument does not exist.

let myarray = [25, 28, 6, 3];
let indexof1 = myarray.indexOf(25); //Returns 0
let indexof2 = myarray.indexOf(2); //Returns -1
let findIndexOf1 = myarray.findIndex(arr => arr % 5 === 0); //Returns 0
let findIndexOf2 = myarray.findIndex(arr => arr % 3 === 0); //Returns 2
let findIndexOf3 = myarray.findIndex(arr => arr % 3 === 4); //Returns -1
console.log(indexof1, indexof2, findIndexOf1, findIndexOf2, findIndexOf3);
*/

/*
//Some and every Method

//Some method

//Some method is same as includes method but the diffrence is that some method takes a function as argument but the includes method takes value as parameter
//Some method retruns true if value specified in function exist in array otherwise it returns false.
console.log(movements);
console.log(movements.includes(-130));
const someAmount = movements.some(amount => amount > 10000);
console.log(`${someAmount} someamount`);

//Every Method
//Every method also receives a callback function just like some method but it returns true only ifevery element of the array passes the condition in callback function only then the Every method returns true

console.log(movements.every(mov => mov > 0)); //False
console.log(account4.movements.every(mov => mov > 0)); //True

//Seperate callback
let deposit = mov => mov < 0;
console.log(movements.every(deposit)); //false
console.log(movements.some(deposit)); //True
console.log(movements.filter(deposit)); //[ -400, -650, -130 ]

*/
/*


//Flat and FlatMap method

//Flat method-The flat method removes the nested arrays and flats the array.The flat method only goes one level deeper.
let arr = [[1, 2, 3], [4, 5, 6], 7, 8];
let oneBigArray = arr.flat();
console.log(oneBigArray); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]

let arrDeep = [[[1, 2]], 3, 0, [4, [5, 6, [7, 8]]]];
// console.log(arrDeep.flat()); // [ (2) […], 3, 0, 4, (3) […] ]

//We can go deep inside an array with providing an argument to flat method.So in argument we provide how many level deep we want to go inside an array.

// console.log(arrDeep.flat(1)); //[ (2) […], 3, 0, 4, (3) […] ]
// console.log(arrDeep.flat(2)); //[ 1, 2, 3, 0, 4, 5, 6, (2) […] ]
// console.log(arrDeep.flat(3)); // [ 1, 2, 3, 0, 4, 5, 6, 7, 8 ]

//Using chaining

let overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, amount) => amount + acc, 0);
console.log(overallBalance);

//flatMap method - This method combines both flat and Map method.So flatMap method first map's the array and then flats it.

// Note:The flatMap method goes only one level deep in the array.So for more deeply nested arrays method we will use flat method.

let overallBalance1 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, amount) => amount + acc, 0);
console.log(overallBalance1);
*/
/*
//Sorting Arrays

//Strings
const owners = ['kapil', 'nishu', 'annu', 'Zack', 'adam', 'Andrew'];
console.log(owners.sort()); //Returns the array sorted or alphabetically from a to z but string starting from capital letter are sorted first and the small letter strings are sorted. This happens because the strings are shorted in ascending order of the character code. So the character code of capital letters is less than the character code of small letters so capital letters are printed first.
// * It mutates the original array so original array is also changed

//Numbers

//! console.log(movements.sort()); It does not work.

//* For sorting numbers we pass in a comparative function inside sort method.
//* Comparative function is called with two arguments.First argument is current value and the second argument is the next value (imagine the sort method is looping over the array).
//* So if comparative function returns negative value than 'a' sorted before 'b'.
//* If comparative function returns positive value than b is sorted before 'a'.
//* If comparative function returns '0' then 'a' and 'b' remains in the same order.
//! return < 0 then A,B (Doesn't switch the order)
//! return > 0 then B,A (Switch the order)
//In ascending Order

// movements.sort((a, b) => {
//   if (a < b) {
//     return -1; //a comes before b
//   } else if (a > b) {
//     return 1; //b comes before a
//   } else {
//     return 0; //Order remains the same.
//   }
// });

//! Improved method

movements.sort((a, b) => a - b);
console.log(movements);

//Descending order

// movements.sort((a, b) => {
//   if (a < b) return 1; //b comes before a
//   else if (a > b) return -1; // a comes before b
//   else return 0;
// });

movements.sort((a, b) => b - a);
console.log(movements);
*/

//! more ways of creating and filling arrays.

let arr = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(arr);

let newArr = new Array(7);
//*Returns an empty array of length 7 wheneve we pass in a single argument.
//*We can not use any method on this empty array of length 7 except the fill method.
//*fill method fills the empty array with the argument we pass in fill method to the defined length.
//! Fill method mutates or changes the existing array.
//* We can also pass in a begin parameter.(From what index should it start filling the array)
//*We can pass in an end parameter too so that it will fill the array upto specified end parameter index.
// newArr.fill(1);
// newArr.fill(1, 3); //It starts filling array from index 3(index 3 included)
newArr.fill(1, 3, 5); //It starts filling array from index 3(index 3 included) and stop filling at index 5(index 5 exclude or not filledd at index 5)
console.log(newArr);

//* we can use fill method to mutate existin array too.

let x = [1, 2, 3, 4, 5, 6, 7, 8];
x.fill(89, 2, 7); //fill the array with 89 from index 2 (included) to index 7(excluded).
console.log(x);

//! Array.from method

//*from method is used on Array construcotor function.
//*In from method we pass in two argument first one is an object of length property and value pair and second argument is a callback function same as map
let y = Array.from({ length: 7 }, () => 1);
console.log(y);

let z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//Create an array of 100 dice rolls
// let dice = Array.from({ length: 100 }, () => Math.floor(Math.random() * 6));
// console.log(dice);
