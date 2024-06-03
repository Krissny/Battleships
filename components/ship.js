export class Ship {
  constructor(length, id) {
    this.hitCount = 0;
    this.length = length;
    this.sunk = false;
    this.id = id;
    this.coords = [];
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
