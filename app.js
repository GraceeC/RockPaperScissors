let submitBtn = document.getElementById('button');
let inputValue = document.getElementById('input');
let text;

document.getElementById('button').addEventListener('click',() => {
console.log('clicked');
displayInputValue()
});

function displayInputValue(){
    let text=inputValue.nodeValue;
    console.log(text);
   let player=document.getElementsByClassName('playerOne');
   

}