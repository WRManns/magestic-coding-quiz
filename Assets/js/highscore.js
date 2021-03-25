var clearBtn = document.getElementById("clear-button");
var returnBtn = document. getElementById("return-button");
var highScoreTable = document.getElementById("highscores");
var highScores=[];

highScores= JSON.parse(localStorage.getItem("highScores"));

function renderHighscore() {
    
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

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    highScores= [];
    highScoreTable.innerHTML = "";
})

returnBtn.addEventListener('click', function() {
    window.location.href= "./index.html"
})