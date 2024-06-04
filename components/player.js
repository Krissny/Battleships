import { GameBoard } from "./gameboard";

export class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new GameBoard();
    this.gameboard.randomPlacement();
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
      x: Math.floor(Math.random * 10),
      y: Math.floor(Math.random * 10),
    };
    return coord;
  }
}
