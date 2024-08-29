
document.querySelector('.js-guess-btn')
  .addEventListener('click', () => {
    const userNumber = document.querySelector('.js-user-number');
    const number = userNumber.value;
    compareNumbers(number);
    userNumber.value = '';
  });

  function compareNumbers(num){
    let computerNumber = Math.ceil(Math.random() * 3).toString();
    let result = '';

    if(num === computerNumber){
      result = `${num} ${computerNumber} You guessed right!`;
    }else if(num < computerNumber){
      result = `${num} ${computerNumber} You guessed way too low!`
    }else if(num > computerNumber){
      result = `${num} ${computerNumber} You guessed way too high!`
    }

    document.querySelector('.js-computer-number').innerHTML = result;
    console.log(result);

  }