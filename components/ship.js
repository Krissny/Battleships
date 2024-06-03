export class Ship {
  constructor(length) {
    this.hitCount = 0;
    this.length = length;
    this.sunk = false;
    this.coord = [];
  }

  hit() {
    this.hitCount++;
    if (this.hitCount >= this.length) {
      this.sunk = true;
    }
    return;
  }
  isSunk() {
    return this.sunk;
  }
}
