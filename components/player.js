import { GameBoard } from "./gameboard.js";

export class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new GameBoard();
    this.gameboard.randomPlacement();
    this.moves = new Set();
  }
  attacked(x1, y1) {
    let coord = {
      x: x1,
      y: y1,
    };
    this.gameboard.receiveAttack(coord);
  }

  randomAttack() {
    let coord = {
      x: Math.floor(Math.random() * 10),
      y: Math.floor(Math.random() * 10),
    };
    if (this.moves.has(coord)) {
      return this.randomAttack();
    }
    return coord;
  }
}
