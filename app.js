let randomGuess = Math.round(Math.random() * (3));
let playersDivElement = document.querySelector('#players-choice');

let userChoice = document.getElementById('user-selection');
let computerHeaderTag = document.getElementById('computer-selection');


let computerSelection;
let userSelection;


let result;

playersDivElement.addEventListener('click', userChoseSelectedItem, false);

window.onload =function() {
    gameLogic(false);
};

//function using e.target to to give each btn e.target value
function userChoseSelectedItem(e) {
    userSelection = e.target;
    computerHeaderTag = ['rock', 'paper', 'scissors'];
  console.log(e.target);
  if (userChoice !== e.currentTarget) {
    choosenItem = e.target.id;
    userChoice.innerHTML = choosenItem;
  }
  e.stopPropagation();
}

function computerSelectedItem() {
  if (randomGuess === 1) {
    return computerSelection = 'rock'
  } else if (randomGuess === 2) {
    return computerSelection = 'paper'
  } else (randomGuess === 3);
  return computerSelection = 'scissors'
}
computerHeaderTag.innerHTML =computerSelection;

function gameLogic(e) {
  if (computerSelection === userSelection) {
    return result='Its a tie'
  } else if (computerSelection === 'rock' && userSelection === paper') {
    return result = 'You lost, Try again!';
  } else if (computerSelection === 'rock' && userSelection === 'scissors') {
    return result = 'Congratgulations you won!';
  } else if (computerSelection === 'scissors' && userSelection === 'rock') {
    return result = 'You lost, Try again!';
  } else if (computerSelection === 'scissors' && userSelection === 'paper') {
    return result = 'Congratgulations you won!';
  } else if (computerSelection === 'paper' && userSelection === 'rock') {
    return result = 'Congratgulations you won!';
  } else if (computerSelection === 'paper' && userSelection === 'scissors'){ 
    return result = 'You lost, try again';
}
