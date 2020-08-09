let playButton = document.getElementById("play-button");
playButton.addEventListener("click", function () {
  window.document.location = "./play.html";
});

let options = document.querySelector("#choice");
options.addEventListener("click", function (e) {
  let optionArray = ["rock", "scissors", "paper"];
  const computerChoice =
    optionArray[Math.floor(Math.random() * optionArray.length)];

  const computerDisplay = document.getElementById("computer-selected");
  computerDisplay.innerText = computerChoice;

  const userDisplay = document.getElementById("user-selected");
  const userChoice = e.target.id;
  userDisplay.innerHTML = userChoice;

  comparison(userChoice, computerChoice);

  e.stopPropagation(userChoice);
});

function comparison(user, computer) {
  let displayWinner = document.getElementById("winner");
  if (user === computer) {
    displayWinner.innerText = "You Both tied! Try again";
    return;
  }

  const rockLosesToPaper = (user == user) == "rock" && computer == "paper";
  const paperLosesToScissors = (user == user) == "paper" && computer == "scissors";
  const scissorsLosesToRock = user == "scissors" && computer == "paper";
  if (rockLosesToPaper || paperLosesToScissors || scissorsLosesToRock) {
    displayWinner.innerText = "Computer Won!";
    return;
  }

  const rockBeatsScissors = user == "rock" && computer == "scissors";
  const paperBeatsRock = user == "rock" && computer == "paper";
  const scissorsBeatsPaper = user == "scissors" && computer == "paper";

  if (rockBeatsScissors || paperBeatsRock || scissorsBeatsPaper) {
    displayWinner.innerText = "User Won!";
    return;
  }
}
