let score = JSON.parse(localStorage.getItem('score')) || {
  win:0,
  lose:0,
  tie:0
};

updateScoreElement();

function updateScoreElement(){
document.querySelector(".js-score").innerHTML =   `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;

}

function updateResultElement(result){
document.querySelector('.js-result').innerHTML = `${result}`;
}

function updateUserComputer(playerMove,computerMove){
document.querySelector(".js-userComp").innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`
}

function pickComputerMove(){
  const randomNumber = Math.ceil(Math.random() * 3);
  let computerMove = '';

  if(randomNumber === 1){
      computerMove = 'Rock';
  }else if(randomNumber === 2){
      computerMove = 'Paper';
  }else{
      computerMove = 'Scissors';
  }
  return computerMove;
}

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'Scissors'){
    if(computerMove === 'Rock'){
      result = 'You lose';
    }else if(computerMove === 'Paper'){
      result = 'You Win';
    }else{
      result = 'It\'s a Tie';
    }
  }else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
    result = 'You Win';
    }else if(computerMove === 'Paper'){
      result = 'It\'s a Tie';
    }else{
      result = 'You lose';
    }      
  }else if(playerMove === 'Rock'){         
      if(computerMove === 'Rock'){
        result = 'It\'s a Tie';
      }else if(computerMove === 'Paper'){
        result = 'You lose';
      }else{
        result = 'You Win';
      }
  }

  updateUserComputer(playerMove,computerMove);
  
  if(result === 'You Win'){
    score.win += 1;
  }else if(result === 'You lose'){
    score.lose += 1;
  }else if(result === 'It\'s a Tie'){
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  updateResultElement(result);
  
  
}