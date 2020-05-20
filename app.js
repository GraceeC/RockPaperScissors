//global variable to grab event listener parent element
let playersDivElement = document.querySelector('#players-choice');
console.log(playersDivElement);
playersDivElement.addEventListener('click', itemSelected, false );
let computerChoice;
let userChoice;

let results =gameLogic();

const resetPlay = document.getElementById('reset');
const scoreKeeper = document.getElementById('score');

//function using e.target to to give each btn e.target value
function itemSelected(e){ 
    if (e.target !== e.currentTarget){
        let clickedItem = e.target.id;
        console.log('button' + ' ' + clickedItem + ' ' + 'clicked' );
    }
    e.stopPropagation();
}

function gameLogic(){
if(computerChoice === userChoice){
    return results = ('Tie!');
}
gameLogic();
}