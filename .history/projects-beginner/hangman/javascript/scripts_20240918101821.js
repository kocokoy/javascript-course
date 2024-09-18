const keyboardOrder =  [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];
let testWord = 'TESTING';
const keyboardDiv = document.querySelector('.js-keyboard');
const showLetter = document.querySelector('.guess-letter-containers');
startGame();

function startGame(){
  keyboardOrder.forEach((letter,index) => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.className = `js-letter`;
    keyboardDiv.appendChild(button);
    keyboardLayOut(index);  
    guessWordLayOut(testWord);
    showLetters(index);
  })
}

function keyboardLayOut(index){
  if(index === 9 || index === 18 || index === 25){
    const br = document.createElement('br');
    keyboardDiv.appendChild(br);
  }
}

function guessWordLayOut(word){
  let html = '';
  word.split('').forEach(() => {
    html += `<p class="guessLetter">_</p>`;
  });
  showLetter.innerHTML = html;
}


function showLetters(i){
  const letterElement = document.querySelectorAll('.js-letter');
  letterElement[i].addEventListener('click',() => {
    let word = testWord.split('');
    letterElement[i].disabled = true;
    let guessLetters = document.querySelectorAll('.guessLetter');
      word.forEach((char,index) => {
        if(char === keyboardOrder[i]){
          guessLetters[index].innerHTML = char;
        }
          userAttempt(true);        

      });
  });
};

function userAttempt(fail){
  if(fail){
    console.log('wrong');
  }

}





