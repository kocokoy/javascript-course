const keyboardOrder =  [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];
let letterHolder = '';

const keyboardDiv = document.querySelector('.js-keyboard');
const showLetter = document.querySelector('.js-showLetters');


keyboardOrder.forEach((letter,index) => {
  const button = document.createElement('button');
  button.textContent = letter;
  button.className = `js-letter`;
  keyboardDiv.appendChild(button);
  keyboardLayOut(index);  
  showLetters(index)
})



function showLetters(i){
 
  const letterElement = document.querySelectorAll('.js-letter');
  letterElement[i].addEventListener('click',() => {
    letterHolder += keyboardOrder[i];
    showLetter.innerHTML = letterHolder;
  })
}

function keyboardLayOut(index){
  if(index === 9 || index === 18 || index === 25){
    const br = document.createElement('br');
    keyboardDiv.appendChild(br);
  }
}

