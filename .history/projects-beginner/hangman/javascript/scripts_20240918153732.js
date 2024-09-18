const keyboardOrder =  [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];
let testWord = randomWords();
const keyboardDiv = document.querySelector('.js-keyboard');
const showLetter = document.querySelector('.guess-letter-containers');
let tries = 7;
startGame();

function startGame(){
  createKeyboard();
};

function randomWords(){
  const fourLetterVerbs = ["jump", "run", "push", "pull", "kick", "bend", "lift", "swim", "drop", "flip"];
  const num = Math.floor(Math.random() * 10);
  const word = fourLetterVerbs[num].toUpperCase();
  return word;
};

function createKeyboard(){
  keyboardDiv.innerHTML = ''; 
  keyboardOrder.forEach((letter,index) => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.className = `js-letter`;
    keyboardDiv.appendChild(button);
    keyboardLayOut(index);
    guessWordLayOut(testWord);
    showLetters(index);
  })
};

function keyboardLayOut(index){
  if(index === 9 || index === 18 || index === 25){
    const br = document.createElement('br');
    keyboardDiv.appendChild(br);
  }
};

function guessWordLayOut(word){
  let html = '';
  word.split('').forEach(() => {
    html += `<p class="guessLetter">_</p>`;
  });
  showLetter.innerHTML = html;
};

function showLetters(i){
  const letterElement = document.querySelectorAll('.js-letter');
  letterElement[i].addEventListener('click',() => {
    const guessLetters = document.querySelectorAll('.guessLetter');
    let word = testWord.split('');
    let rightAndWrong = [];
    letterElement[i].disabled = true;
      word.forEach((char,index) => {
        if(char === keyboardOrder[i]){
          guessLetters[index].innerHTML = char;
          rightAndWrong.push(true);
        }

        if(keyboardOrder[i] != char){
          rightAndWrong.push(false);
        }
      });
        userAttempt(userValidation(rightAndWrong));  
  });
};

function userValidation(boolean) {
  let result = false;

  boolean.forEach((value) => {
      if (value === true) {
          result = true; 
      }
  });

  return result;
};

function userAttempt(attempts){
    if(attempts === false){
      tries--;
      if(tries > 0){
        alert(`You only have ${tries} attempts`);
      }else{
        alert(`you lose ${testWord}`);
        resetGame();
      }
        
    }
};

function resetGame(){
  tries = 7;
  createKeyboard();
}






