function gameLogic() {
  let userChoice;
  let computerChoice;
  let playButton = document.getElementById("play-button");
  let options = document.querySelector("#choice");

  // event handler for play Button on index.html page
  playButton.addEventListener("click", function () {
    window.document.location = "./play.html";
  });

  //user choice logic
  options.addEventListener("click", userLogic, false);

  function userLogic(e) {
    userDisplay = document.getElementById("user-selected");
    if (userChoice !== event.currentTarget) {
      userChoice = e.target.id;
      userDisplay.innerHTML = userChoice;
    }
    e.stopPropagation(userChoice);
  }

  //computer choice logic
  function computerLogic(computer) {
    let optionArray = ["rock", "scissors", "paper"];
    let randomGuess = optionArray[Math.floor(Math.random() * optionArray.length)];
    computer = randomGuess;
    computerDisplay = document.getElementById("computer-selected");
    options.addEventListener("click", function () {
      computerDisplay.innerText = computer;
      comparison(userChoice, computer);
    });
  }
  computerLogic(computerChoice);

  function comparison(user, computer) {
    let displayWinner = document.getElementById("winner");
    if (user === computer) {
      displayWinner.innerText = "You Both tied! Try again";
    }
    if (user == "rock" && computer == "paper") {
      displayWinner.innerText = "Computer Won!";
    }
    if (user == "rock" && computer == "scissors") {
      displayWinner.innerText = "User Won!";
    }
    if (user == "rock" && computer == "paper") {
      displayWinner.innerText = "Computer Won!";
    }
    if (user == "paper" && computer == "scissors") {
      displayWinner.innerText = "Computer Won!";
    }
    if (user == "paper" && computer == "rock") {
      displayWinner.innerText = "User Won!";
    }
    if (user == "scissors" && computer == "paper") {
      displayWinner.innerText = "User Won!";
    }
    if (user == "scissors" && computer == "rock") {
      displayWinner.innerText = "Computer Won!";
    }
  }
}
gameLogic();