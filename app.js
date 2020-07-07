let userPlay;
let computerPlay;

window.onload = function () {
  startGame();
  computerChoice();
}

let startGame = function () {
  playButton = document.getElementById('play-button');
  playButton.addEventListener('click', function () {
    console.log(playButton, 'button clicked');
    window.document.location = './play.html';
  });
}

let computerChoice = function () {
  let optionArray = ['rock', 'scissors', 'paper'];
  let randomGuess = optionArray[Math.floor(Math.random() * optionArray.length)];
  console.log(randomGuess);

  let computerSelectedItem = document.getElementById('computer-selection');
  computerSelectedItem.innerText = randomGuess
}

let userChoice = function () {
  let userSelectedItem = document.querySelectorAll('.choice');


}