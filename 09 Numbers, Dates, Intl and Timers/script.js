'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i])

    const day = `${date.getDate()}`.padStart(2, 0)
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    let displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 10);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;
//Fake Login
currentAccount = account1
updateUI(currentAccount)
containerApp.style.opacity = '100';





btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date
    const now = new Date()
    const day = `${now.getDate()}`.padStart(2, 0)
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*

//All numbers in javascript are represented internally as floating point numbers.
//Example
console.log(23 === 23.0) //Returns True

//Numbers are internally stored in 64 bit binary format or 64 base 2 format(0s and 1s)

//In binary form it is very hard to represent some numbers(mostly fractions)
//Example
console.log(0.1 + 0.2) //Returns 0.30000000000000004

//String to number

console.log(Number('23'))
console.log(+'23', typeof +'23')

//Parsing -->Initial values in the string should be numbers.
//ParseInt method
// Using parseint we can get rid of unnecessary symbols. In Parseint method we pass in second argument(Radix) which is the base of numeral system which we are using.
//ParsseInt returns only the integer part of the string.
console.log(Number.parseInt('28px', 10)) //Returns 28(Number)
console.log(Number.parseInt('e34', 10)) //Returns NaN because we know that it the string should start with a number.

//ParseFloat method.
// ParseFloat method returns the Number with fractional part as well present in the string.

console.log(Number.parseInt('23.5px')) //Returns --> 23
console.log(Number.parseFloat('  23.5px')) //Returns --> 23.5


//isNaN Method
//Using isNaN we check if the value is not a number or number.
//It returns true only if the argument is NaN itself

console.log(Number.isNaN('Hello')) //Returns --> False
console.log(Number.isNaN(NaN)) //Returns --> True
console.log(Number.isNaN(20)) //Returns --> False
console.log(Number.isNaN(+'20x')) //Returns --> true(Because +'20x' is NaN)
console.log(Number.isNaN(23/0)) //Returns --> False.

//isFinite Method

//isFinite Method is the best way to check if a value is Number or not.

console.log(Number.isFinite(20)) //Returns --> True
console.log(Number.isFinite('20khgf')) //Returns --> False
console.log(Number.isFinite(23/0)) //Returns --> False
console.log(Number.isFinite(+'23m')) //Returns --> False
console.log(Number.isFinite(25.89)) //Returns --> True

//isInteger
//We use isInteger to check if a value is integer or not.

console.log(Number.isInteger(2)) //returns --> True
console.log(Number.isInteger(2.85)) //returns --> False

//Math and Random

//Square root method --> Sqrt method

console.log(Math.sqrt(91)) //Returns -->9.5393...

//Using exponentiation method to find the root.

//Square root.
console.log(25 ** (1/2)) //Returns -> 5
// cubic Root
console.log(125 ** (1/3)) //Returns --> 4.99...

//Max method --> Returns the maximum value
//It uses type coercion but not the parsing

console.log(Math.max(...[5,2,8,98,650])) //returns -->650
console.log(Math.max(...[5,2,8,'98'])) //returns -->98
console.log(Math.max(...[5,2,8,'650px','98'])) //returns -->NaN

//Min Method --> Returns the minimum value.

console.log(Math.min(...[15,8,2])) // Returns 2


//Constants in maths

console.log(Math.PI * (15 ** 2)) //786.83...

//Creating a random Integer generator function using Math.random method

let randomInteger = (min, max) => Math.floor(Math.random()* (max - min) + 1) + min;
console.log(randomInteger(10, 30))


//Rounding Integers

//trunc method -->It removes the decimal part of the nummber.

console.log(Math.trunc(23.78)) //Returns --> 23

//Round method --> Returns the nearest integer to the floating point number

console.log(Math.round(23.4)) //Returns --> 23
console.log(Math.round(23.6)) //Returns --> 24
console.log(Math.round(23.5)) //Returns --> 24

//Ceil method --> Round up the number

console.log(Math.ceil(23.4)) //Returns --> 24
console.log(Math.ceil(23.8)) //Returns --> 24

//Floor method
console.log(Math.floor(23.4)) // Returns --> 23
console.log(Math.floor(23.8))  // Returns --> 23

//NOTE --> The trunc and floor method works the same for positive numbers but they work in different way for negative numbers.
console.log(Math.trunc(-23.4)) // Returns --> -23
console.log(Math.floor(-23.4)) // Returns --> -24

//Rounding Decimals
//toFixed method --> It returns a string not a number
console.log((2.8).toFixed(0)) //Returns --> 3(String)
console.log((2.8).toFixed(3)) //Returns --> 2.800(String)
console.log((2.3456).toFixed(2)) //Returns --> 2.35(String)


 */
/*
//The Remainder operator -->The Remainder(%) operator returns the remainder
console.log(52%10) //Returns 2
console.log(50%10) //Returns 0

//So the remainder operator can be used to check if a number is even or odd or if a number is divisible by another number or not

labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row,i){
    if (i % 2 === 0){
      row.style.backgroundColor = 'orange'
    }
    if (i%3 === 0){
      row.style.backgroundColor = 'blue'
    }
  })
})
*/
/*
//Numeric Separators
//To write big numbers we can use '_' as a separator for a thousand as below

const diameterSolarSystem = 287_460_000_000
console.log(diameterSolarSystem) //Returns 287460000000. So we can see js engine ignores the underscores(_).

// console.log(Number('548_986')) //Returns NaN. So we can not use numeric separator in a string of numbers and then on converting the string to number we get NaN.

console.log(parseInt('894_56')) //Returns 894
*/

/*
//Working with BigInt

//JS could not store a number which is  greater than 2 ** 53 so a new primitive data type called bigInt was introduced in ES2020.
console.log(2 ** 53); //Returns 9007199254740992
console.log(2 ** 53 + 1); //Returns 9007199254740992
console.log(2 ** 53 + 2); //Returns 9007199254740994
console.log(2 ** 53 + 3); //Returns 9007199254740996

// Numbers which are returned above are not accurate so we use bigInt for very large numbers.
console.log(845465498584651486518n);//We write 'n' in the end of a number to change it into bigint.
console.log(98764589465894612384651n);
console.log(BigInt('987645894648651325465'));//For converting large numbers to bigint using constructor function we have to pass in the number as a string.

//Operations
//some Mathematical operators works on bigint too but the data type should be same meaning that we can not use mathematical operator between bigint and number.
console.log(545128451n + 7486514865132n); //Returns 7487059993583n
// console.log(545128451n + 7486); //Error can not mix bigInt and other types.

//Exceptions
console.log(20n > 15);//True
console.log(20n ===20);//False because type coercion is not used
console.log(20n == 20);//true because type coercion is used
console.log(8465189465 + 'Hello');//Returns 8465189465Hello
console.log(84651894657845n + 'Hello');//Returns 84651894657845Hello

//Divisions

console.log(10n / 3n);//Returns 3n which is the integer part only.
console.log(14n / 3n);//Returns 4n which is the integer part only.
console.log(10 /3);//Returns 3.3333


 */
/*

//Creating a date.
//1
const  now = new Date()
console.log(now);//Returns the current time(Tue May 09 2023 08:11:12 GMT+0530 (India Standard Time))
//2
console.log(new Date('May 09 2023 08:10:11')); //Returns the date we passed in with some additional data(Tue May 09 2023 08:10:11 GMT+0530 (India Standard Time))
//3
console.log(new Date('January 10, 2001'))//Returns the passed in date(Wed Jan 10 2001 00:00:00 GMT+0530 (India Standard Time))
console.log(new Date(account1.movementsDates[0]));//Returns Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)
console.log(account1.movementsDates[0]);//Returns Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)

//4
console.log(new Date(2006, 1, 21,10,31,33)); //Returns Tue Feb 21 2006 10:31:33 GMT+0530 (India Standard Time)
// NOTE:--> The month above is zero based meaning 0-january and 11 is december.
console.log(new Date(2010, 11,42)); //Returns Tue Jan 11 2011 00:00:00 GMT+0530 (India Standard Time)

//We can pass in the milliseconds passed since the beginning of the unix based time system which is 1 Jan 1970.
console.log(new Date(8465188465132));//Returns Mon Apr 02 2238 22:44:25 GMT+0530 (India Standard Time)
*/
/*

//Dates we created here are just another type of object meaning that these also have methods just like object, string, arrays.

const future = new Date(2001, 0,10,4,35)
console.log(future);//Wed Jan 10 2001 04:35:00 GMT+0530 (India Standard Time)
console.log(future.getFullYear());//Returns the year--> 2001
console.log(future.getMonth());//Returns the month --> 0
console.log(future.getDate());//Returns the date --> 10
console.log(future.getDay());//Returns the day -->3(Starting from 0 as sunday)
console.log(future.getHours());//Returns the Hour -->4
console.log(future.getMinutes());//Returns the Minute -->35
console.log(future.getSeconds());//Returns the Second -->0
console.log(future.toISOString()); //2001-01-09T23:05:00.000Z
console.log(future.getTime());//Returns the milliseconds passed since january 1970 to specified date, and it is called the timestamp.

console.log(Date.now());//Returns the milliseconds passed since the begining of the unix based time.

//Note:--> There is set method also for all the above methods.
future.setFullYear(2021)//Set the year in future to 2021
console.log(future);

*/

