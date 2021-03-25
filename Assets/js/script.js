var javaQuestions = [
  {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
  },
  {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      question: "Arrays in Javascript can be used to store:",
      choices: ["number and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
  },
  {
      question: "String values must be enclosed within ____ when being assigned to variables",
      choices: ["commas", "curly brackets", "quotes", "parantheses"],
      answer: "quotes"
  },
  {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
      answer: "console.log"
  },
  {
      question: "",
      choices: [],
      answer: ""
  }
];

var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start-btn");
var submitBtn = document.getElementById("submit-btn");
var questionEl= document.getElementById("questions");
var quizContainer= document.getElementById("quiz");
var choiceContainer= document.getElementById("choices");
var userScore= document.getElementById("end-score");
var userInitials;
var timer;
var timerCount;
var currentQuestion = 0;
var questionNumber = 0;
var answer;


function startQuiz() {
  document.getElementById("quiz-home").style.display = "none";
  document.getElementById("quiz-card").style.display = "block";
  timerCount = 100;
  startTimer()
  getQuestion()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;

    if (timerCount === 0 || questionNumber === javaQuestions.length) {
      clearInterval(timer);
      setTimeout(endGame, 500);       
    }
  }, 1000);
}

function getQuestion() {    

    quizContainer.textContent = javaQuestions[questionNumber].question;
    choiceContainer.innerHTML = "";

    answer = javaQuestions[questionNumber].answer;

    var choices = javaQuestions[questionNumber].choices;
    questionNumber++;
    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[q]
        answerBtn = choiceContainer.appendChild(nextChoice).setAttribute("class", "btn");
    }
}

//function to cause effect/check the interactivity with the click of answers
function hideFeedback(){
  var pElement = document.getElementsByClassName("feedback")[0]
  pElement.style.display='none'
}

function showFeedback(){
  var pElement = document.getElementsByClassName("feedback")[0]
  pElement.style.display= 'block';
}

choiceContainer.addEventListener("click", function (event) {
  var pElement = document.getElementsByClassName("feedback")[0]
  
  // if/else for answer results
  if (answer === event.target.textContent) {   
      pElement.innerHTML = "Correct.";
      setTimeout(hideFeedback,1225);
      showFeedback();   
      
  } else {
      pElement.innerHTML = "Incorrect.";
      setTimeout(hideFeedback,1225);
      showFeedback();
  }   
  getQuestion(); 
});

function displayScore() {
  userScore.textContent= timerCount;
}

function addScore () {
  userInitials = document.getElementById("initials").value  

  var newScore = {
      name: userInitials,
      score: timerCount
    };
    // check if there are scores
    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    // push object into score array
    highScores.push(newScore)
    // turn objects into an array and send to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function endGame() {
  document.getElementById("quiz-card").style.display ="none";
  document.getElementById("end-screen").style.display ="block";
  displayScore();
}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  addScore();

  window.location.href= "./highscore.html"
});