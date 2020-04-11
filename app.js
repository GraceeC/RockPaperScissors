let submitBtn = document.getElementById('button');
let InputValue = document.getElementById('input');

document.getElementById('button').addEventListener('click',() => {
console.log('clicked');
});
function displayInputValue(){
    let inputValue = document.getElementById('input');
    return document.getElementById('playerOne').innerHTML =inputValue;


}