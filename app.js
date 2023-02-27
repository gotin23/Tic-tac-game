const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentGameP1 = [];
let currentGameP2 = [];
const cases = [...document.querySelectorAll(".case")];
cases.forEach((cell) => cell.addEventListener("click", handleClick));

const player1Info = document.querySelector(".player1");
const player2Info = document.querySelector(".player2");

let playerOne = true;
let playerTwo = false;

function handleClick(e) {
  /* gestion des clicks avec ajout supressiond classe et lock(pour jouer chacun son tour*/
  let clicked = e.target;
  let clickedData = clicked.getAttribute("data-index");
  console.log(clickedData);
  if (playerOne) {
    currentGameP1.push(parseInt(clickedData));
    clicked.removeEventListener("click", handleClick);
    playerOne = false;
    playerTwo = true;
    clicked.textContent = "X";
    player1Info.classList.remove("active");
    player2Info.classList.add("active");
  } else if (playerTwo) {
    currentGameP2.push(parseInt(clickedData));
    playerOne = true;
    playerTwo = false;
    clicked.textContent = "O";
    player2Info.classList.remove("active");
    player1Info.classList.add("active");

    clicked.removeEventListener("click", handleClick);
  }
  vericationWinP2();
  vericationWinP1();
  handleDrawGame();
}
let lockDraw = true;
const comment = document.querySelector(".comment");

function vericationWinP2() {
  /* vérififier si le joueur 1 gagne */
  let p2countWC0 = 0;
  let p2countWC1 = 0;
  let p2countWC2 = 0;
  let p2countWC3 = 0;
  let p2countWC4 = 0;
  let p2countWC5 = 0;
  let p2countWC6 = 0;
  let p2countWC7 = 0;
  1;
  for (let el of winningCombinations[0]) {
    if (currentGameP2.includes(el)) {
      p2countWC0++;
    }
  }
  for (let el of winningCombinations[1]) {
    if (currentGameP2.includes(el)) {
      p2countWC1++;
    }
  }
  for (let el of winningCombinations[2]) {
    if (currentGameP2.includes(el)) {
      p2countWC2++;
    }
  }
  for (let el of winningCombinations[3]) {
    if (currentGameP2.includes(el)) {
      p2countWC3++;
    }
  }
  for (let el of winningCombinations[4]) {
    if (currentGameP2.includes(el)) {
      p2countWC4++;
    }
  }
  for (let el of winningCombinations[5]) {
    if (currentGameP2.includes(el)) {
      p2countWC5++;
    }
  }
  for (let el of winningCombinations[6]) {
    if (currentGameP2.includes(el)) {
      p2countWC6++;
    }
  }
  for (let el of winningCombinations[7]) {
    if (currentGameP2.includes(el)) {
      p2countWC7++;
    }
  }

  if (
    p2countWC0 === 3 ||
    p2countWC1 === 3 ||
    p2countWC2 === 3 ||
    p2countWC3 === 3 ||
    p2countWC4 === 3 ||
    p2countWC5 === 3 ||
    p2countWC6 === 3 ||
    p2countWC7 === 3
  ) {
    comment.textContent = "Le joueur 2 a gagné 🙂!";
    comment.style.color = "rgb(68, 255, 0)";
    lockDraw = false;
    player1Info.classList.remove("active");

    cases.forEach((cell) => cell.removeEventListener("click", handleClick));
  }
}
function vericationWinP1() {
  /* vérififier si le joueur 1 gagne */
  let p1countWC0 = 0;
  let p1countWC1 = 0;
  let p1countWC2 = 0;
  let p1countWC3 = 0;
  let p1countWC4 = 0;
  let p1countWC5 = 0;
  let p1countWC6 = 0;
  let p1countWC7 = 0;

  for (let el of winningCombinations[0]) {
    if (currentGameP1.includes(el)) {
      p1countWC0++;
    }
  }
  for (let el of winningCombinations[1]) {
    if (currentGameP1.includes(el)) {
      p1countWC1++;
    }
  }
  for (let el of winningCombinations[2]) {
    if (currentGameP1.includes(el)) {
      p1countWC2++;
    }
  }
  for (let el of winningCombinations[3]) {
    if (currentGameP1.includes(el)) {
      p1countWC3++;
    }
  }
  for (let el of winningCombinations[4]) {
    if (currentGameP1.includes(el)) {
      p1countWC4++;
    }
  }
  for (let el of winningCombinations[5]) {
    if (currentGameP1.includes(el)) {
      p1countWC5++;
    }
  }
  for (let el of winningCombinations[6]) {
    if (currentGameP1.includes(el)) {
      p1countWC6++;
    }
  }
  for (let el of winningCombinations[7]) {
    if (currentGameP1.includes(el)) {
      p1countWC7++;
    }
  }

  if (
    p1countWC0 === 3 ||
    p1countWC1 === 3 ||
    p1countWC2 === 3 ||
    p1countWC3 === 3 ||
    p1countWC4 === 3 ||
    p1countWC5 === 3 ||
    p1countWC6 === 3 ||
    p1countWC7 === 3
  ) {
    comment.textContent = "Le joueur 1 a gagné 🙂!";
    comment.style.color = "rgb(68, 255, 0)";
    lockDraw = false;
    player2Info.classList.remove("active");

    cases.forEach((cell) => cell.removeEventListener("click", handleClick));
  }
}

function handleDrawGame() {
  /*function pour gérer le cas de draw game*/
  if (currentGameP1.length + currentGameP2.length === 9 && lockDraw) {
    comment.textContent = "On dirait bien que c'est un match nul 😞 ";
    player2Info.classList.remove("active");
  }
}

window.addEventListener("keydown", handleRestart);
let shuffleLock = false;
function handleRestart(e) {
  /* Function pour recommencer la partie avec un reset*/
  e.preventDefault();
  if (e.keyCode === 32) {
    console.log("yes");
    cases.forEach((cell) => (cell.textContent = ""));
    cases.forEach((cell) => cell.addEventListener("click", handleClick));
    playerOne = true;
    playerTwo = false;
    currentGameP1 = [];
    currentGameP2 = [];
    lockDraw = true;
    comment.textContent = "Qui sortira vaiqueur ?";
    comment.style.color = "#f1f1f1 ";
    player2Info.classList.remove("active");
    player1Info.classList.add("active");
  }
}
