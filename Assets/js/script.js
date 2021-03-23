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
  }
];

var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start-btn");
var submitBtn = document.getElementById("submit-btn");
var questionEl= document.getElementById("questions");
var answersEl= document.getElementById("answers");

var timer;
var timerCount;

function startQuiz() {
  document.getElementById("quiz-home").style.display = "none";
  document.getElementById("quiz-card").style.display = "block";
  timerCount = 100;
  startTimer()
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;

    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

startBtn.addEventListener("click", startQuiz);