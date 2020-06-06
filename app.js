let randomGuess = Math.round(Math.random() * (3));
let playersDivElement = document.querySelector('#players-choice');

let userChoiceTag = document.getElementById('user-selection');
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
    computerSelection = ['rock', 'paper', 'scissors'];
    
  if(computerSelection !== computerSelection){
      itemSelected = computerSelection;
      computerHeaderTag.innerHTML = itemSelected;
  } console.log(computerHeaderTag)
  if (userChoiceTag !== e.currentTarget) {
    choosenItem = e.target.id;
    userChoiceTag.innerHTML = choosenItem;
  }
  e.stopPropagation();
}



console.log(computerSelection)

function computerSelectedItem() {
  if (randomGuess === 1) {
    return computerSelection = 'rock'
  } else if (randomGuess === 2) {
    return computerSelection = 'paper'
  } else (randomGuess === 3);
  return computerSelection = 'scissors'
}


computerHeaderTag.innerHTML = computerSelection;




function gameLogic(e) {
  if (computerHeaderTag === userSelection) {
    return result='Its a tie'
  } else if (computerHeaderTag === 'rock' && userSelection === 'paper') {
    return result = 'You lost, Try again!';
  } else if (computerHeaderTag === 'rock' && userSelection === 'scissors') {
    return result = 'Congratgulations you won!';
  } else if (computerHeaderTag === 'scissors' && userSelection === 'rock') {
    return result = 'You lost, Try again!';
  } else if (computerHeaderTag === 'scissors' && userSelection === 'paper') {
    return result = 'Congratgulations you won!';
  } else if (computerHeaderTag === 'paper' && userSelection === 'rock') {
    return result = 'Congratgulations you won!';
  } else if (computerHeaderTag === 'paper' && userSelection === 'scissors'){ 
    return result = 'You lost, try again';
}
}