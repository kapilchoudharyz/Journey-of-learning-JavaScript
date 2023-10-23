'use strict';
//storing the elements from document in variables.

//player 1

let mainScorePlayer1 = document.querySelector('.js--main-score-player-1');
let currentScorePlayer1 = document.querySelector('.js--current-score-player-1');
let player1Score = 0
//Player 2

let mainScorePlayer2 = document.querySelector('.js--main-score-player-2');
let currentScorePlayer2 = document.querySelector('.js--current-score-player-2');

//Buttons
let newGame = document.querySelector('.new-game');

let rollDice = document.querySelector('.roll-dice');

let holdScore = document.querySelector('.hold-score');
//Dice number generator

let diceGenerator

// console.log(diceGenerator, mainScorePlayer1.textContent, currentScorePlayer1.textContent, mainScorePlayer2.textContent, currentScorePlayer2.textContent);

rollDice.addEventListener('click', function(){
    
    diceGenerator = Math.trunc(Math.random() * 6) + 1;
    if (diceGenerator !== 1){
   player1Score +=  diceGenerator
   currentScorePlayer1.textContent = player1Score 
   document.querySelector('#dice-image').src = `dice-${diceGenerator}.png`
}
document.querySelector('.dice-img').classList.remove('hidden')
})