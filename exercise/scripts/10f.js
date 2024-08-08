function toggleButton(selector){
  const buttonGaming = document.querySelector(selector);
  if(!buttonGaming.classList.contains('is-toggled')){
    turnOffPreviousButton();
    buttonGaming.classList.add('is-toggled');
  }else{
    buttonGaming.classList.remove('is-toggled');
  }
};

function turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');

  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}


