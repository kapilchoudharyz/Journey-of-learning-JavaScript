'use strict';
/*
//Selecting an element from the html file.
// document.querySelector('. for selecting class and # for selecting id')
console.log(document.querySelector('.message').textContent); //Here first the element is selected using query selector and then the text content is loged to the console.

//What is DOM - DOM means document object model.It is strucured representation of html documents.Allows js to access HTML elements and styles to manipulate.
//DOM is connection point between html document and javascript.

//Selecting and  manipulating Elements

document.querySelector('.message').textContent = 'Correct number! whoo😇' //Here we have manipulated the text content of DOM node with class message

document.querySelector('.number').textContent = 6; document.querySelector('.score').textContent = 8;

console.log(document.querySelector('.guess').value) //To access the value in input tags we use .value . In input tags .textcontent returns an empty string.So we use .value .
// console.log(document.querySelector('.message').value); //We cannot use .value for the value for tags other then the input tags.
document.querySelector('.guess').value = 58;

*/
//Handling click event
//We are defining the secret number in the start of programme so that it will be calculated at the very start of the game.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
const displayMessage = function(message){
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //When there is no input
    // document.querySelector('.message').textContent = 'Please insert an number';
    displayMessage( 'Please insert an number')
  } //We used !guess because it is executed when condition is true.if we dont put a number then guess becomes 0 and 0 is the the falsy value.So we used !guess here so that the falsy value can be changed to true to execute the if statement.
  else if (secretNumber === guess) {
    //When the player wins
    let highscore = Number(document.querySelector('.highscore').textContent);
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    } else if (score < highscore) {
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent =
    //   'Wohoo that was the correct guess!';
    displayMessage('Wohoo that was the correct guess!')
    //Below are the inline css not the external or internal css.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
  }
  //   else if (secretNumber !== guess){
  //     document.querySelector('.message').textContent = 'sorry that was the wrong guess!'
  //   }
  else if (guess !== secretNumber) { //When guess is wrong.
    //When input is grater than generated number
    if (score > 1) {
      //We did the score > 1 because

      // document.querySelector('.message').textContent = guess > secretNumber ? 'sorry, your guess was too high!': 'sorry your guess was too low!';
      displayMessage(guess > secretNumber ? 'sorry, your guess was too high!': 'sorry your guess was too low!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '💥Sorry you lost the game';
      displayMessage('💥Sorry you lost the game')
      document.querySelector('.score').textContent = 0;
    }
   }  // else if (secretNumber > guess) {
  //   //When input is less than generated number
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'sorry your guess was too low!';
  //     score--; //Everytime we click on check button the score decreases by 1.
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥image.png Sorry you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

///////////////////////////////////////////////////

// Coding challenge #1
/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, secretnumber, score and guess input field
4. Also restore the original background color (#222) and secretnumber width (15rem)

GOOD LUCK 😀
*/

//1.
document.querySelector('.again').addEventListener('click', function () {
  // location.reload(); It just reloads the page.
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});
document.querySelector('.reset').addEventListener('click', function () {
  location.reload(); // Reloads the page
});
