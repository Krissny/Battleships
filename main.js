import { creategrid } from "./components/DOM.js";
import { Player } from "./components/player.js";

let player1 = new Player("Krishna");
let player2 = new Player("Computer");
let flag = 1;

const div1 = document.querySelector(".player1");
const div2 = document.querySelector(".player2");
const res = document.querySelector(".reset");
const tip = document.querySelector(".tip");

let gameboard1 = creategrid(player1, turn);
let gameboard2 = creategrid(player2, turn);

div1.appendChild(gameboard1);
div2.appendChild(gameboard2);
// console.log(player2.gameboard.board);

function turn() {
  // console.log(player2.gameboard.board);
  setTimeout(checkWinner, 300);
  if (flag === 1) {
    gameboard1.classList.add("disabled");
    gameboard2.classList.remove("disabled");
    flag = 2;
  } else {
    tip.textContent = "";
    gameboard1.classList.add("disabled");
    gameboard2.classList.remove("disabled");
    const coord = player2.randomAttack();
    // console.log(coord);
    player1.attacked(coord.x, coord.y);
    flag = 1;
    gameboard1 = creategrid(player1, turn);
    div1.removeChild(div1.firstChild);
    div1.appendChild(gameboard1);

    gameboard2 = creategrid(player2, turn);
    div2.removeChild(div2.firstChild);
    div2.appendChild(gameboard2);
    // catchCell();
    // checkWinner();
    turn();
  }
}
turn();

function reset() {
  tip.textContent = "click on reset to change ship arrangement";
  player1 = new Player("Krishna");
  player2 = new Player("Computer");
  flag = 1;

  gameboard1 = creategrid(player1, turn);
  gameboard2 = creategrid(player2, turn);

  div1.removeChild(div1.firstChild);
  div2.removeChild(div2.firstChild);

  div1.appendChild(gameboard1);
  div2.appendChild(gameboard2);
  turn();
}

res.addEventListener("click", reset);

function checkWinner() {
  if (player1.gameboard.shipsSunk()) {
    alert("You Lost");
    reset();
  } else if (player2.gameboard.shipsSunk()) {
    alert("Congratulations! You Won");
    reset();
  }
}
