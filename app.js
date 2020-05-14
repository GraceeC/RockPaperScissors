window.onload = function () {
    playersChoice();
    computersChoice();
    playButton();
}
document.getElementById('rock').addEventListener('click', () => {
    console.log('rock clicked');
});
document.getElementById('paper').addEventListener('click', () => {
    console.log('paper clicked');
});
document.getElementById('scissors').addEventListener('click', () => {
    console.log('scissors clicked');
});
document.getElementById('play').addEventListener('click', () => {
    console.log('button clicked');
});



function playersChoice() {
    let playerOneItem = document.getElementById('value-option');
    console.log(playerOneItem);
    playerOneItem
}


function computersChoice() {

}


function playButton() {
    console.log('play btn function working');
}
