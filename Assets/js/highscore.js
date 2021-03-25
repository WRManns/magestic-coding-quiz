var clearBtn = document.getElementById("clear-button");
var returnBtn = document. getElementById("return-button");
var highScoreTable = document.getElementById("highscores");
var highScores=[];
//retrieving the highscores from local storage and placing them into an array to be used
highScores= JSON.parse(localStorage.getItem("highScores"));

function renderHighscore() {
    //in pulling down the highscores and initials from local storage, creating rows in a table to display
    if (localStorage && highScores !== null) {
        for (let i=0; i < highScores.length; i++) {
            var newHighscore = document.createElement("tr");
            var newCell = document.createElement("td");
            newCell.textContent = (i + 1) + "." + highScores[i].name + ":   " + highScores[i].score;
            newHighscore.appendChild(newCell);
            highScoreTable.appendChild(newHighscore);
        }
    }
}
renderHighscore();
//clear button to clear local storage and set highScores array to blank
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    highScores= [];
    highScoreTable.innerHTML = "";
})
//allowing to return to the quiz
returnBtn.addEventListener('click', function() {
    window.location.href= "./index.html"
})