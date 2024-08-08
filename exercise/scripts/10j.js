let calculation = localStorage.getItem('calculation') || '';
updateNumbers(); 

function updatedCalculation (numbers){
  calculation+=numbers;
  updateNumbers();
  localStorage.setItem('calculation', calculation);
  
}

function updateNumbers(){
  document.querySelector('.js-calculator').innerHTML = calculation
}