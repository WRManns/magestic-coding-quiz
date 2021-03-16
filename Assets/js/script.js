var timer = document.querySelector(".timer");
var timeLeft = 100;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = timeLeft;
  
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
}

setTime();