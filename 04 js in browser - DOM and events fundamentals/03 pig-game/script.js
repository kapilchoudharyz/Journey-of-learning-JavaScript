'use strict';
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playing, scores, currentScore, activePlayer;

const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  current0EL.textContent = 0;
  current1EL.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('active--player');
  player1El.classList.remove('active--player');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  // 1. Here first we are changing tha active player 0  current score to zero.
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // 2. From player0El if the class active--player exist it will be removed or vice-verce.
  player0El.classList.toggle('active--player');
  // 3. From player1El if the class active--player does not exist it will be added or vice-verce.
  player1El.classList.toggle('active--player');
  // 4. Here the current score is changed to zero.
  currentScore = 0;
  //5. here if active player is 0 then it will be changed to 1 and if activePlayer is not equal to 0 it will be changed to zero.
  // Switch to next player
  //6. Below we are using ternary operator because if current--0 gets a 1 then we want to change active player to current--1 and if current--1 gets a 1 then we want to change the active player to current--0.
  activePlayer = activePlayer === 0 ? 1 : 0;
};
//Rolling dice function

btnRoll.addEventListener('click', function () {
  console.log('working');
  if (playing) {
    // 1.generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    //2.display the dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    //3.check for rolled 1
    if (dice !== 1) {
      //Add the dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();

      //7. So When the click event happens the current score will be equal to zero and active player will be current--1 and so the score will be added to player 2. So this if else block is executed in this way.
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2.Check if score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--player');
    }
    //Finish the game
    // 3.check if score is < 100 then switch to the next player
    else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init); //We dont call init function here.
