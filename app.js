document.getElementById('rock').addEventListener('click', () =>{
    console.log('rock clicked');
});
document.getElementById('paper').addEventListener('click', () =>{
    console.log('rock clicked');
});
document.getElementById('scissors').addEventListener('click', () =>{
    console.log('scissors clicked');
});
document.getElementById('buttonOne').addEventListener('click', () =>{
    console.log('button clicked');
});

function PlayerOneDisplay(){
    console.log('rock');
}
PlayerOneDisplay();

function PlayerTwoDisplay(){
console.log('paper');
}
PlayerTwoDisplay();

function playButton(){
    console.log('play btn function working');
}
playButton();