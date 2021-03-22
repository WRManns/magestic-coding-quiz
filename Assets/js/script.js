var timer = document.querySelector(".timer");
var timeLeft = 100;
timer.textContent = timeLeft;

function setTime() {
    
    var timerInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = timeLeft;
      
  
      if(timeLeft === 0) {
         // Clears interval and runs endGame function
          clearInterval(timer);
          endGame();
        }
        clearInterval(timerInterval);
      }, 1000);  
}

setTime();