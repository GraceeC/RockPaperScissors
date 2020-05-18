const rockItem =document.getElementById('rock');
const paperItem = document.getElementById('paper');
const scissorsItem = document.getElementById('scissors');
const resetPlay = document.getElementById('reset');
const scoreKeeper = document.getElementById('score');
const playersChoice = document.getElementById('player-one');
const computersChoice = document.getElementById('player-two');

// window.onload = function () {
//     playersChoice();
//     computersChoice();
//     playButton();
// }

rockItem.addEventListener('click', () => {
    console.log('rock clicked');
});

paperItem.addEventListener('click', () => {
    console.log('paper clicked');
});

scissorsItem.addEventListener('click', () => {
    console.log('scissors clicked');
});


resetPlay.addEventListener('click', () => {
    console.log('reset button clicked');
});


