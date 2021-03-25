//object to hold all the questions, answerchoices as arrays, and correct corresponding answers
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
  //empty object to deal with an issue of the if method in the startTimer function where the last question
  //would render with answer choices and then move to end screen before input from user was obtained
  {
      question: "",
      choices: [],
      answer: ""
  }
];

//variables tied to html elements, and empty global variable for use in functions
var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start-btn");
var submitBtn = document.getElementById("submit-btn");
var questionEl= document.getElementById("questions");
var quizContainer= document.getElementById("quiz");
var choiceContainer= document.getElementById("choices");
var userScore= document.getElementById("end-score");
var userInitials = document.getElementById("initials");
var timer;
var timerCount;
var currentQuestion = 0;
var questionNumber = 0;
var answer;

//the Quiz function. removes the start screen and displays quiz card and first question. Also, begins the timer function
function startQuiz() {
  document.getElementById("quiz-home").style.display = "none";
  document.getElementById("quiz-card").style.display = "block";
  timerCount = 100;
  startTimer()
  getQuestion()
}
//funtion that sets the timer, timer interval, and begins the countdown
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
//if function that checks to see if there is any time left on the clock, or if there are any questions left to answer
//if there is either no time or questions left, it stops the timer and runs the endGame function
    if (timerCount === 0 || questionNumber === javaQuestions.length) {
      clearInterval(timer);
      setTimeout(endGame, 500);       
    }
  }, 1000);
}
//funtion to call the questions. they follow sequence in the object.

function getQuestion() {    

    quizContainer.textContent = javaQuestions[questionNumber].question;
    choiceContainer.innerHTML = "";
//this calls the corresponding correct answer to each question
    answer = javaQuestions[questionNumber].answer;
//calling the choices associated with each question
    var choices = javaQuestions[questionNumber].choices;
    questionNumber++;
    //creating button elements for each answer choice available
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
      //if incorrect, ten seconds will be removed from timer
  } else {
      pElement.innerHTML = "Incorrect.";
      timerCount = timerCount - 10;
      setTimeout(hideFeedback,1225);
      showFeedback();
  }   
  getQuestion(); 
});
//displays the score to be called at the endGame screen
function displayScore() {
  userScore.textContent= timerCount;
}
//stores score in local storage
function addScore () {
  //no matter how user enters intials, they will be displayed as uppercase
  var initials = userInitials.value.toUpperCase();  

  var newScore = {
      name: initials,
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
//links to the highscore html page on click
  window.location.href= "./highscore.html"
});