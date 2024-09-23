console.log("Welcome to my game");
var changeTurnAudio = new Audio("Audio/turn.mp3");
// const startGameAudio = new Audio("Audio/start game.mp3");
// const gameOverAudio = new Audio("Audio/game over.mp3");
var turn = "X";
// function to change Turn
var changeTurn = function () {
    return turn === "X" ? "O" : "X";
};
// winning Logic
var checkWin = function () {
    var boxtext = document.getElementsByClassName("boxtext");
    var wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(function (e) {
        if (boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
            boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML &&
            boxtext[e[0]].innerHTML !== "") {
            var winner = document.querySelector(".info");
            winner.innerText = boxtext[e[0]].innerHTML + " Won";
        }
    });
};
// game Logic
var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(function (Element) {
    var boxtext = Element.querySelector(".boxtext");
    Element.addEventListener("click", function () {
        if (boxtext.innerText == "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            changeTurnAudio.play();
            checkWin();
            resetfunc();
        }
    });
});
// reset game Logic
var resetfunc = function () {
    var Reset = document.querySelector("#Reset");
    Reset.addEventListener("click", function () {
        var boxtext = document.getElementsByClassName("boxtext");
        var text = boxtext;
        for (var i = 0; i < text.length; i++) {
            boxtext[i].innerHTML = "";
        }
    });
};
