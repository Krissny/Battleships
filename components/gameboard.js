import { Ship } from "./ship";

export class GameBoard {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
    this.s1 = new Ship(5);
    this.s2 = new Ship(4);
    this.s3 = new Ship(3);
    this.s4 = new Ship(2);
  }

  receiveAttack(coord) {}

  outOfBound(coord) {}

  hasShip(coord) {}

  placeShips(x, y) {}
}
