var timer = document.querySelector(".timer");
var timeLeft = 100;
timer.textContent = timeLeft;

function setTime() {
    
    var timerInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = timeLeft;
      
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
      }
  //sets timer to 1 second intervals
    }, 1000);
}

setTime();