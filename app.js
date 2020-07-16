let userSelected = document.getElementById('user-selected');
let computerSelected = document.getElementById('computer-selected');
let playButton = document.getElementById('play-button');
let options = document.querySelector('#choice');


let userChoice;
let computerChoice;
// event handler for play Button on index.html page
playButton.addEventListener("click", function () {
  window.document.location = "./play.html";
});
//user choice logic
options.addEventListener('click', userLogic, false);
function userLogic(e) {
  console.log('user btn clicked');
  if (userChoice !== event.currentTarget) {
    userChoosenItem = e.target.id;
    userSelected.innerHTML = userChoosenItem;
  }
  e.stopPropagation();
}

//computer choice logic
function computerLogic() {
  let optionArray = ['rock', 'scissors', 'paper'];
  let randomGuess = optionArray[Math.floor(Math.random() * optionArray.length)];

  console.log(randomGuess);
options.addEventListener('click', function(){
  computerSelected.innerText = randomGuess;
});
  
} 
computerLogic();

