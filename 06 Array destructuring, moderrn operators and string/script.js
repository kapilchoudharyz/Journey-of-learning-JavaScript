`use strict`;
/*
 
let airline = 'TAP air Portugal';
let plane = 'A320';

console.log(plane[0]); //A 'String'
console.log(plane[1]); //3 'String'
console.log(typeof plane[2]); // 'String'
console.log(typeof 'b737'[0]); // 'String'
console.log(airline.length); //16
console.log('b737'.length); //4

console.log(airline.indexOf(' ')); //3
console.log(airline.indexOf('A')); //1
console.log(airline.lastIndexOf('a')); //14 bc lastIndexOf checks the last indexof a letter.
console.log(airline.lastIndexOf('u')); //12
console.log(airline.indexOf('Portugal')); //8

//slice method.

// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.

console.log(airline.slice(4)); // 'air Portugal' sliced the string from index 4
console.log(airline.slice(4, 7)); //'air' start slicing the string from index 4 and ends the slice before index 7. So starting value is included into the string but ending value is not included into the string. Length of extrected string will be 7 - 4 = 3

console.log(airline.slice(0, airline.indexOf(' '))); //'air'
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

console.log(airline.slice(-2)); //al negative index of slice the value from the end.
console.log(airline.slice(2)); //P air Portugal
console.log(airline.slice(1, -1)); // 'AP air Portuga' starts at index 1 and removes the last letter.

const checMiddleSeat = function (seat) {
  //B and E are middle sheets.
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle sheet 😒');
  } else {
    console.log('You just got lucky 😂😂💥');
  }
};
checMiddleSeat('11B'); //It is a middle seat
js: formatted: 32;

checMiddleSeat('23C'); //It is not a middle sheet
checMiddleSeat('3E'); //It is a middle seat

//When a method is called on a string js behind the scenes converts the string to a string object and applies the method on this object and after applying the method on it, it again converts it back to a string and returns it.
console.log(typeof new String('kapil')); //Object
console.log(typeof new String('kapil').slice(1)); //String.

//Changing string to lowercase and uppercase

console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //KAPIL

//Fix capitalisation in name

let passanger = 'kApil';
let passangerLower = passanger.toLowerCase();
let passangerCorrect = passanger[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect); //Kapil

//comparing email

const email = 'hello@kapil.io';
const loginEmail = '  Hello@kapil.Io \n';

//Trim method

// trim() method removes the whitespaces from string.

// trimEnd() and trimStart() removes the spaces from the ending and from the starting respectively.

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// console.log(loginEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(loginEmail);

//Replacing.

//We can replace a single character or a word using replace() method as shown below. Replace method is also case sensitive.

//Replacing a character.
const priceGB = '288,97£';
const usPrice = priceGB.replace(',', '.').replace('£', '$');
console.log(usPrice);

//Replacing a whole word.
const announcement =
  'All passangers come to barding door 23. Boarding door 23!';
console.log('Replace', announcement.replace('door', 'gate')); //Only replace first occurence of door in announcement string.

//We can use replaceAll() function to replace all occurence of any word.
console.log('Replace All', announcement.replaceAll('door', 'gate')); //replaces all occurence of door in announcement string.

//Or we can replace all occurence in a string as below.
console.log(
  'Another method to replace all occurence',
  announcement.replace(/door/g, 'gate')
);

//String methods which return boolean.

const planeNew = 'Airbus A320neo';

//includes() method which check if a string contains a specific substring.
console.log(planeNew.includes('A320')); //true
console.log(planeNew.includes('A3neo')); //false

//sartsWith() method which check if a string starts with a specific substring.
console.log(planeNew.startsWith('Air')); //True
console.log(planeNew.startsWith('3')); //fasle

//endsWith() method which check if a string ends with a specific substring.
console.log(planeNew.endsWith('o')); //true

//Example.
if (planeNew.startsWith('Airbus') && planeNew.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

//practise exercies
const checkBaggage = function (items) {
  let baggage = items.toLowerCase();
  if (
    baggage.includes('knife') ||
    baggage.includes('gun') ||
    baggage.includes('bomb')
  ) {
    console.log('You are not allowed on board.');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, pocket Knife and Gun');
checkBaggage('Socks, camers');
checkBaggage('got some snacks and a bomb for destroying the plane.');
console.log(
  '--------------------------------------------------------------------'
);
*/

//split() method

//split() method splits the string from argument which we provide inside bracket() and retruns the remaining letters of a string (splitted by argument) inside an array

console.log('a+very+nice+string'.split('+')); //[ "a", "very", "nice", "string" ]
console.log('kapil kumar'.split(' ')); //[ "kapil", "kumar" ]

const [firstName, lastName] = 'kapil kumar'.split(' ');
console.log(firstName, lastName); //kapil kumar

//join() method.

// join() method joins the strings inside an array with a space or whatever we put inside the bracket() and returns an string.

const newName = ['Mr.', firstName, lastName].join(' '); //Mr. kapil kumar
console.log('new-name:', newName, typeof newName); //new-name: Mr. kapil kumar string
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica and smith davis');
capitalizeName('kapil choudhary');

//Padding a string

//What padding con do is increase the lenght of the string with some character.

//padStart(length, 'character') adds the character at the begining of the string to increase the length of the string. First argument inside the () is what length of the string we want to be and second argument is what character to add to increase the length of the string.

//padEnd(length, 'character') adds the character at the ending of the string to increase the length of the string. First argument inside the () is what length of the string we want to be and second argument is what character to add to increase the length of the string.

const message = 'go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '-'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = function (number) {
  //connverting the number to a string.
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard());
console.log(maskCreditCard(8745845864564512));

console.log(maskCreditCard('879465132213546879'));

//repeat method

//It allows us to repeat a string multiple times. inside () we write the number how many times we want the string to repeat.

const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(8));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in the line ${'✈️'.repeat(n)}`);
};
planesInLine(8);
planesInLine(21);
/*
//Array destructuring
//Destructuring: it is a way of unpacking values from an array Or an object into separate variables.

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    ////ES6 Enhanced object literals.(Now can use expressions as property name or in other words now we can compute the property names too not just the values.)
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //24 Hours
    close: 24,
  },
};
const restaurent = {
  name: 'AL italico',
  location: 'JLN marg jaipur',
  categories: ['italic', 'Organic', 'Vegetarian'],
  starterMenu: ['Garlic Bread', 'Salad', 'matar paneer'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ES6 enhanced object literals.(FIRST)
  openingHours, //Here we are using an object which is outside of the restaurent object. so here a property opening hours is created and in which the value of variable opening hours is stored.(the name of variable and the property should be same otherwise js will never know which object you are specifying)

  /////Enhaced object literal (second) After ES6 we no longer have to write function keyword we can write a function as below.
  orderDelivery({
    //Here js does destructuring
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    // console.log(
    //   `Order received! Please deliver ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time}`
    // );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}. `);
  },
  orderPizza: function (mainIngreddients, ...otherIngredients) {
    console.log(mainIngreddients);
    console.log(otherIngredients);
  },
};
restaurent.orderDelivery({
  time: '11:30',
  address: 'nangalsiya',
  mainIndex: 1,
  starterIndex: 0,
});
restaurent.orderDelivery({
  address: 'nangalsiya',
  mainIndex: 1,
});


////Maps: Iteration.

//Another way of creating a new map. using array of arrays.

const question = new Map([
  ['question', 'what is the best programming language of the world'], //Inside each array first element is key and second element is value.So each array consist key value pair.
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct answer'],
  [false, 'Try again'],
]);
console.log(question);

//Convert object to map

//We know Object.entries(openingHours) also return an array of arrays. So we can convert an object to map like : new Map(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log('openingHours', Object.entries(openingHours));
console.log('hoursMapp', hoursMap);

//Quiz app

console.log(question.get('question'));

for (let [key, value] of question) {
  // console.log('///////////', key, value);
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer)); //Correct answer

//Or we can achieve the same functionality as below as well.

// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

////Converting a map to an array : using spread operator.

console.log([...question]);
console.log([[...question.keys()]]);
console.log([[...question.entries()]], 'zzzzzzzzzzzzzz');
console.log([[...question.values()]]);


//Deleting data from the object.

let obj = {
  name: 'kapil',
  vill: 'Nanagal siya',
};
delete obj.name;
console.log(obj);

////Maps: Fundamentals

//just like an object data is stored in key value pairs.

//The big diffrence between maps and objects is that in object the key is always a string or symbol but in map the key can be of any data type.

const rest = new Map();

//To fill the map we can use the set(key, value) method.

rest.set('name', 'classico italiano');

rest.set(1, 'france, Italy');

//Calling set method like this does not only update the map that it's called on but it also calls the set which we can see below.

console.log(rest.set(2, 'New delhi, India')); // Output: Map(3) { name → "classico italiano", 1 → "france, Italy", 2 → "New delhi, India" }

//As we saw above set method also calls the map so we can chain the next set like below.

rest
  .set('categories', ['italic', 'Organic', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');
//To read data from a map we use get method.

// console.log(rest.get('open')); //11
// console.log(rest.get(true)); //We are open :D
console.log(rest.get(1)); //We are open :D

const currentTime = 21;
const openOrClose = rest.get(
  currentTime > rest.get('open') && currentTime < rest.get('close')
);
console.log(openOrClose);

//has() method to check if certain key exist in the map or not.
console.log(rest.has('name')); //true

//delete() method to remove a key value pair from the map

rest.delete(2);

//size() method to check how many items are there inside a map

console.log(rest.size); //7

//clear() method to remove all the properties from the map.

// rest.clear();
// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); //Undefined.

//It does not work like above so we can make it work as below

let arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); //'Test

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);



//////////// Sets in javascript.

////set is basically just a collection of unique values. So that means that a set can never have any duplicates.

////set are also iterables.

////We can not take out values from set if we want to then we can always use arrays.

//// The main use case of sets is actually to remove duplicate values of arrays.

/////Inside set we can pass iterables only.
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet);
console.log(new Set('kapila')); //Output: Set(5) [ "k", "a", "p", "i", "l" ]

console.log(ordersSet.size); //3

console.log(ordersSet.has('pizza')); // true: This has() method is similar to include() method in arrays which check if certain value is present in Set or not.
console.log(ordersSet.has('Bread')); // false

ordersSet.add('garlic bread');
ordersSet.add('garlic bread'); //only one of these is added
ordersSet.delete('risotto'); //Removes risotto from the map
// ordersSet.clear(); //Removes all values from the set.
console.log(ordersSet);
// console.log(ordersSet[2]); //We can not get any value like this because there is no index of element in a set.
for (const order of ordersSet) {
  console.log(order);
}

////Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
let staffUnique = [...new Set(staff)]; //We can use spread operator to create an array after removing duplicate values from a set.
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); //3
////We can find how many diffrent letters are there in a string.
console.log(new Set('kapil kumar').size);

//

//////////Looping object: object keys, values and entries.

////Looping over Property Names
const properties = Object.keys(openingHours);
console.log(properties); //So basically Object.keys(openingHours) returns an array of property name. And we know we can loop over arrays.
console.log(`we are open on ${properties.length}`);

//property names are also called keys or property keys.
for (let day of Object.keys(openingHours)) {
  console.log(day);
} //Logs the three key names of object openingHours
//Looping object: object keys, values and entries.

let openStr = `We are open on ${properties.length} days : `;
for (let day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

////Looping over property values.

const values = Object.values(openingHours); //So basically Object.values(openingHours) returns an array of values from openinHours object. And we know we can loop over arrays.
console.log(values);

////Looping over an entire object.
const entries = Object.entries(openingHours);
console.log(entries);

//The Object.entries() method returns an array of a given object's own enumerable string-keyed property key-value pairs.

for (let [day, { open, close }] of entries) {
  console.log(`${day} : opens at ${open} and closes at ${close} `);
}


////////////////////////////

////////Optional Chaining

// console.log(restaurent.openingHours.mon.open); //We get error because mon is undefined and we or js can not read property of undefined.

//with optional chaining,if a certain property does not exist,then undefined is returned immediately.

console.log(restaurent.openingHours.mon?.open); //If the property before(in this case which is mon) ? exist only then js will read open property otherwise it will immediately return undefined.

if (restaurent.openingHours && restaurent.openingHours.mon) {
  console.log(restaurent.openingHours.mon.open);
}

//We can use multiple optional chaining.
console.log(restaurent.openingHours?.mon?.open); //Undefined

//Example

let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  let open = restaurent.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} we open at ${open}`);
}

//Methods or functions inside an object or methods are actions that can be performed on objects
console.log(restaurent.order?.(0, 1) ?? 'method does not exist.'); //We can check if method exist.
console.log(restaurent.orderAnything?.(0, 1) ?? 'Method does not exist.');

//Using Optional chaining with Arrays

let userArr = [{ name: 'kapil', vill: 'nangal siya' }];
console.log(userArr[0]?.name || 'user array empty'); //kapil


/////////////////////////

//Looping arrays: THE FOR-OF LOOP
const menu = [...restaurent.mainMenu, ...restaurent.starterMenu];
//FOR-OF LOOP
for (let item of menu) console.log(item); //Each item in menu array is logged one by one to the console.Bc item variable is assignedd one value at a time from menu array and here we want to log those values of menu.

for (const item of menu.entries()) {
  //The entries() method returns an Array Iterator object with key/value pairs:
  console.log(item);
}
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries()); //And so we see that it is basically an array, which in each position contains a new array.


///////////////////////////////


//Or assignment operator.

const rest1 = {
  name: 'capri',
  // numGuests: 20,
  // numGuests: 0,
  // owner: 'kapil',
};
const rest2 = {
  name: 'la piazza',
  owner: 'Givoni georgio',
};

//Or assignment operator

// rest1.numGuest = rest1.numGuests || 10;//20
// rest2.numGuest = rest2.numGuests || 10;//10

// rest1.numGuests ||= 10;//20
// rest2.numGuests ||= 10;//10

//Nullish assignment operator.(Works almost same as or operator but null and undefined are considered to be falsy vlues not 0)

// rest1.numGuests ??= 10; //0 when rest1.numguests = 0
// rest2.numGuests ??= 10; //10

//Logical AND operator

// rest1.owner = rest1.owner && 'Anonimous'; //undefined
// rest2.owner = rest2.owner && 'Anonimous'; //Anonimous

rest1.owner &&= '<Anonimous>'; // No owner property is created because here we are not assigning or creating any new property in rest1 object. Here we check and finds that rest1.owner does not exist so it is undefined which is falsy value and it returns undefinedd but no rest1.owner property is created or this undefined is not stored anywhere.

// But in below case a new property name owner is created whose value is set undefined because the statement is executed from left to right so whathappens is js engine checks if rest1.owner is present if it is not present it creates a new property owner in object rest1 with value undefined later it checks if rest1.owner is truthy or falsy ass we know rest1.owner's value is set to undefined so it resturns the undefined and the value of rest1.owner is set to undefined.
// rest1.owner = rest1.owner && 'Anonimous'; //undefined

rest2.owner &&= '<Anonimous>'; //<Anonimous>

console.log(rest1);
console.log(rest2);
// console.log(rest1.owner);

console.log('//////////////////////');
const obj1 = {
  name: 'kapil',
  collage: 'st.wilfred',
};
const obj2 = {
  name: 'nishu',
  school: 'c.r. international',
  class: 'third year',
};
////////The logical OR assignment (x ||= y) operator only assigns if x is falsy.
obj1.class ||= 11;
console.log(obj1);

////////The logical AND assignment (x &&= y) operator only assigns if x is truthy.
obj2.class &&= 'final year';
console.log(obj2);

//////////////////////////////////////////

//Nullish coalescing operator
restaurent.numGuests = 0;
// const guests = restaurent.numGuests || 10;
// console.log(guests); // 10 bc 0 is falsy value. We can solve this problem as below.

//Nullish: null and undefined (Not 0 or ' ')
const guestsCorrect = restaurent.numGuests ?? 10;
console.log(guestsCorrect); //0 bc this operator does not counts 0 and ' ' as falsy values instead it takes them as truthy value.
//So nullish operator only jumps to next value when the value is null or undefined.

////////////////////////////
// Short Circuiting (&& and ||)

//Properties of boolean operator.
//Use any data types, return ANY data types, short-circuiting.

//Short circuiting in or (||) operator

//In case of or operator short-circuiting means that if the first value is a truthy value it will immediately return that first value.So if first value is truthy js will not even take a look at second value.
console.log('--------OR--------');
console.log(3 || 'kapil'); //3
console.log('' || 'kapil'); //kapil bc ' ' is a falsy value so second value will also be evaluated
console.log(true || 0); //true bc true is truthy value so second value will not be evaluated.
console.log(undefined || null); //null, undefined is falsy but still we get null.

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello
restaurent.numGuest = 0;
const guests1 = restaurent.numGuest ? restaurent.numGuest : 10;
console.log(guests1);
const guests2 = restaurent.numGuest || 10;
console.log(guests2); //If restaurent.numGuests is undefined then we get 10 because undefined is falsy value and js will check second value if it is truthy. But if restaurent.numGuests is defined then the value of restaurent.numGuests will be returned.If restaurent.numGuests = 0 then we will get 10 because 0 is falsy value even though restaurent.numGuests is defined.

//Short circuiting in and (&&) operator.

console.log('------------AND----------');

console.log(0 && 'kapil'); //0 bc and operator short circuit when the first value is falsy and immediately returns the first value without checking the second value
console.log(7 && 'kapil'); //kapil bc first value is truthy so it checks the second and second is truthy as well so it  returns the last value.
console.log('Hello' && 23 && null && undefined && 'kapil'); // null bc first and second value are truthy so it checks the third value which is falsy value so immediately it returns the falsy value without further checking.

if (restaurent.orderPizza) {
  restaurent.orderPizza('mushrroms', 'some2', 'some3');
}

restaurent.orderPizza && restaurent.orderPizza('mushrroms', 'some2', 'some3'); //mushrroms Array [ "some2", "some3" ] bc restaurent.orderPizza is truthy so it checks the second value which is truthy as well so it returns the last truthy value which is restaurent.orderPizza('mushrroms', 'some2', 'some3').


////////////////////////////////////////////////
// Rest patterns and paramenters

//It packs the elements inside an array.
//Rest pattern and spread operators syntex are  same but the diffrence is that it will work as an spread operator  spread operator if it is in right side of the equal sign and it will work as an rest pattern if it is in left side of the equal sign.
// 1) Destructuring
//SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);
//REST, because on the left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5]; //Here what ...others does is that it assigns a and b value 1 and 2 using array destructuring and packs unused elemnts during destructuring in an array and assign this array to 'others' variable.
console.log(a, b, others);
//We should always use rest operator at the end
const [pizza, , rissoto, , something, ...otherFood] = [
  ...restaurent.mainMenu,
  ...restaurent.starterMenu,
]; //Here first spread operator unpacks the two strings on rhs and then assign elements to the variables and the unused elements are packed into string and assigned to 'otherFood' variable.
console.log(pizza, rissoto, something, otherFood);
//The rest operator works with objects as well

//Objects

const { sat, ...weekDays } = restaurent.openingHours;
console.log(weekDays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
// add(2);
// add(2, 3, 5, 8, 10);
// add(2, 3, 5, 54, 3, 92);

const x = [23, 5, 7];
add(...x);

restaurent.mushorderPizza('rooms', 'onion', 'olives', 'spinach');
restaurent.orderPizza('mushrooms');

///////////////////////////////////////////////////////
// The Spread operator

//It unpacks the elements inside an array

const arr = [7, 8, 9];
//So if we want to create a neew array badNewArray with some elements from arr array we can do it as below or we can use spread operator
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//Using spread operator.
//What spread operator does is it takes an array and expends it into individual elements
const newArr = [1, 2, ...arr];
console.log('new', newArr);

console.log(...newArr);

const newMenu = [...restaurent.mainMenu, 'paneer tikka'];
console.log(newMenu);

//Copy array(Shallow copy)
const mainMenuCopy = [...restaurent.mainMenu];

//Jointing arrays
const menu = [...restaurent.mainMenu, ...restaurent.starterMenu];
console.log(menu);

const str = 'jonas';
const letters = [...str, ' ', 's.']; //Here spread operator expands all the letters from the string.
//We can only use spread operator while we are building an array or when we pass values into a function.
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredients"),
//   prompt('Ingredients'),
//   prompt('Ingredients'),
// ];

// restaurent.orderPasta(...ingredients);

//The spread operator works on all iterables(arrays, strings , maps or sets) and objects

//Object

const newRestaurent = {
  foundedIn: 2022,
  ...restaurent, //What ...restaurent does is it expands all its properties and expands them all inside the array or object which is newRestaurent.

  Founder: 'kapil',
};
console.log(newRestaurent);

const restaurentCopy = { ...restaurent };
restaurentCopy.name = 'Ristorante roma';
console.log(restaurent.name);
console.log(restaurentCopy.name);


//////////////////////////////////////////////////////
//Object destructuring

//In object there isn't any order so we name the variable as the property name.
const { name, openingHours, categories } = restaurent;
//We have to give the property names as variable but we can give the variable the name of our choice as below.
const {
  name: nameOfRestaurent,
  openingHours: Hours,
  categories: tags,
} = restaurent;
console.log("property Names", name, openingHours, categories);
console.log("New Names", nameOfRestaurent, Hours, tags);

//Default values

//We can set the default value for a property which does not exist as shown below
const { menu = [], starterMenu: starters = [] } = restaurent;
console.log(menu, starters);

//Mutating variables

let a = 111;
let b = 999;
let c = 8;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a: x, b: y, c, d = [] } = obj); //We put this whole line inside parenthesis () because when we start a line with {} then javascript expects a code block.
//In above code we reassigned variable a, b, c with obj.a, obj.b, obj.c
console.log(x, y, c, d); //23, 7, 14, []
console.log(a, b); // 111, 999

//Nested objects

const {
  fri: { open: openingTime, close: closingTime },
} = openingHours;
console.log(openingTime, closingTime);


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
console.log(p, q, r, s);*/

// let a = 111;

// let b = 999;

// let c = 8
