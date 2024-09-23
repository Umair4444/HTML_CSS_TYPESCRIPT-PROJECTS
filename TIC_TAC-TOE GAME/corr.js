console.log("Welcome to Tic-Tac-Toe");
var turn = "X";
// function to change turn
var changeTurn = function () {
  return turn === "X" ? "O" : "X";
};
// function to check for a win
var checkWin = function () {};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});
