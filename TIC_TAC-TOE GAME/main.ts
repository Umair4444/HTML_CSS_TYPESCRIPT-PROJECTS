console.log(`Welcome to my game`);

const changeTurnAudio = new Audio("Audio/turn.mp3");
// const startGameAudio = new Audio("Audio/start game.mp3");
// const gameOverAudio = new Audio("Audio/game over.mp3");

let turn = "X";

// function to change Turn
let changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// winning Logic
let checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext") as HTMLCollection;
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
      boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML &&
      boxtext[e[0]].innerHTML !== ""
    ) {
      let winner = document.querySelector(".info") as HTMLElement;
      winner.innerText = boxtext[e[0]].innerHTML + " Won";
    }
  });
};

// game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((Element) => {
  let boxtext = Element.querySelector(".boxtext")! as HTMLElement;
  Element.addEventListener("click", () => {
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
let resetfunc = () => {
  let Reset = document.querySelector("#Reset") as HTMLElement;
  Reset.addEventListener("click", () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let text = boxtext as unknown as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < text.length; i++) {
      boxtext[i].innerHTML = "";
    }
  });
};
