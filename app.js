//global variable to grab event listener parent element
let randomGuess = Math.floor(Math.random() * 3);
console.log(randomGuess);
let playersDivElement = document.querySelector('#players-choice');
let computerChoice = document.getElementById('computer-selection');
let userChoice = document.getElementById("user-selection");
let result = gameLogic();

let userSelection;
let computerSelection;

playersDivElement.addEventListener("click", userChoseSelectedItem, false);

window.onload = function (e) {
  gameLogic();
  computerSelectedItem();
  userChoseSelectedItem(event);
};

//function using e.target to to give each btn e.target value
let userSelectedItem = document.getElementById('user-selection');
function userChoseSelectedItem(e) {
  if (userSelection !== e.currentTarget) {
    choosenItem = e.target.id;
    userSelectedItem.innerHTML = choosenItem;
  }
  e.stopPropagation();
}

function computerSelectedItem() {
  if (randomGuess === 1) {
    return (result = 'rock');
  } else if (randomGuess === 2) {
    return (result = 'paper');
  } else randomGuess === 3;
  return (result = 'scissors');
}
console.log(result);
computerChoice.innerHTML = computerSelection;

function gameLogic() {
  if (userChoice === computerChoice) {
    return (result = "You both ties");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return (result = "You lost, Try again!");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return (result = "Congratgulations you won!");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return (result = "You lost, Try again!");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return (result = "Congratgulations you won!");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return (result = "Congratgulations you won!");
  } else if (userChoice === "paper" && computerChoice === "scissors")
    return (result = "You lost, try again");
}
