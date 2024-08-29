let operator = '';
updateNumbers();

function getArithmetic(num){
  operator+=num;

  if(num === 'clear'){
    operator = '';
  }
  updateNumbers();
  
};

function updateNumbers(){
  const number = document.querySelector('.js-output-calculator');
  number.innerHTML = operator;
}



