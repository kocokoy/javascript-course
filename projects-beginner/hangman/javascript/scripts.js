const keyboardOrder =  [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];
const randomWords = {
  verbs: ["jump", "run", "push", "pull", "kick", "bend", "lift", "swim", "drop", "flip"],
  animals:  ["cat", "dog", "bat", "owl", "fox", "ant", "lion", "frog", "bear", "wolf"]
 };
const keyboardDiv = document.querySelector('.js-keyboard');
const titleOfWord = document.querySelector('.js-kind-of-word');
const showLetter = document.querySelector('.guess-letter-containers');
let life = 3;
let bool = {}; 
startGame();

function startGame(){
  let guessWord = generateRandomWords();
  keyboardDiv.innerHTML = ''; 
  keyboardOrder.forEach((letter,index) => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.className = `js-letter`;
    keyboardDiv.appendChild(button);
    keyboardLayOut(index);
    guessWordLayOut(guessWord);
    showLetters(index,guessWord);
  })
};

function generateRandomWords(){
  const num = Math.floor(Math.random() * 10);
  const numForTitle = Math.floor(Math.random() * 2) + 1;
  let word = '';
  let title = '';

  if(numForTitle === 1){
    word = randomWords.verbs[num].toUpperCase();
    title = 'Verbs';
  }
  if(numForTitle === 2){
    word = randomWords.animals[num].toUpperCase();
    title = 'Animals';
  }
  titleOfWord.innerHTML = title;
  return word;
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


function showLetters(i,guessWord){
  const letterElement = document.querySelectorAll('.js-letter');
  letterElement[i].addEventListener('click',() => {
    const guessLetters = document.querySelectorAll('.guessLetter');
    let word = guessWord.split('');
    let tries = [];
    letterElement[i].disabled = true;
      word.forEach((char,index) => {
        if (bool[char] === undefined) {
          bool[char] = false;
        }
        if (char === keyboardOrder[i]) {
          guessLetters[index].innerHTML = char; 
          bool[char] = true; 
          tries.push(true);
        }
        if(char != keyboardOrder[i]){
          tries.push(false);
          
        }     
      });   
        setTimeout(() => {
          checkForWin();
        }, 100);
        console.log(tries);
        checkForLose(tries);
    });
};

function checkForWin() {
  const allCorrect = Object.values(bool).every(value => value === true);
  if (allCorrect) {
    console.log("You win!");  
    alert("You win!");  
    resetGame();   
  }
}

function checkForLose(tries){
  const test = tries.every(value => value === false);
  if(test){
    life--;
    if(life > 0){
      console.log("You're Wrong!");  
      alert(`You're Wrong, you only have ${life} tries`);
    }else if(life === 0){
      alert(`You're Wrong, You Lose!`);
      startGame();
    }
  }
}

function resetGame(){
  life = 3;
  startGame();
}






