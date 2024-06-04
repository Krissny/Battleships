import { Ship } from "./ship";

export class GameBoard {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
    this.s1 = new Ship(5, 1);
    this.s2 = new Ship(4, 2);
    this.s3 = new Ship(3, 3);
    this.s4 = new Ship(2, 4);
  }

  receiveAttack(coord) {
    if (this.hasShip(coord)) {
      if (this.board[coord.x][coord.y] === 1) {
        this.board[coord.x][coord.y] = -1;
        this.s1.hit();
      } else if (this.board[coord.x][coord.y] === 2) {
        this.board[coord.x][coord.y] = -2;
        this.s2.hit();
      } else if (this.board[coord.x][coord.y] === 3) {
        this.board[coord.x][coord.y] = -3;
        this.s3.hit();
      } else if (this.board[coord.x][coord.y] === 4) {
        this.board[coord.x][coord.y] = -4;
        this.s4.hit();
      }
      return true;
    } else {
      this.board[coord.x][coord.y] = "."; // A missed attack
      return false;
    }
  }

  outOfBound(coord) {
    if (coord.x < 0 || coord.x > 10 || coord.y < 0 || coord.y > 10) {
      return true;
    }
    return false;
  }

  hasShip(coord) {
    if (this.board[coord.x][coord.y] != 0) {
      return true;
    }
    return false;
  }

  placeShips(start, end, ship) {
    let finalCoord = [];
    if (
      this.outOfBound(start) ||
      this.outOfBound(end) ||
      Math.max(Math.abs(start.x - end.x), Math.abs(start.y - end.y)) !=
        ship.length
    ) {
      // console.log("runs1");
      return false;
    } else {
      if (start.x === end.x) {
        // it means that the direction in horizontal
        for (let i = start.y; i < end.y; i++) {
          if (this.hasShip({ x: start.x, y: i })) {
            // console.log("runs2");
            return false;
          } else {
            finalCoord.push([start.x, i]);
          }
        }
      } else if (start.y === end.y) {
        for (let i = start.x; i < end.x; i++) {
          if (this.hasShip({ x: i, y: start.y })) {
            // console.log("runs3");
            return false;
          } else {
            finalCoord.push([i, start.y]);
          }
        }
      }
      if (finalCoord.length < ship.length) {
        console.log("runs4");
        return false;
      } else {
        ship.coords = finalCoord;
        finalCoord.forEach((elem) => {
          this.board[elem[0]][elem[1]] = ship.id;
        });
        return true;
      }
    }
  }
  randomPlacement() {
    let ships = [this.s1, this.s2, this.s3, this.s4];
    let x1;
    let x2;
    let y1;
    let y2;
    for (let i = 0; i < 4; i++) {
      // horizontal or vertical
      let direction = Math.floor(Math.random() * 2); // 0 means horizontal and  1 means vertical
      let notPlaced = true;
      while (notPlaced) {
        if (direction == 0) {
          x1 = Math.floor(Math.random() * 10);
          x2 = Math.floor(Math.random() * 10);
          y1 = Math.floor(Math.random() * 10);
          y2 = y1;
        } else {
          x1 = Math.floor(Math.random() * 10);
          x2 = x1;
          y1 = Math.floor(Math.random() * 10);
          y2 = Math.floor(Math.random() * 10);
        }
        const place = {
          start: {
            x: x1,
            y: y1,
          },
          end: {
            x: x2,
            y: y2,
          },
        };
        if (this.placeShips(place.start, place.end, ships[i])) {
          notPlaced = false;
        }
      }
    }
  }

  // All ships sunk or not
  shipsSunk() {
    let list = [this.s1, this.s2, this.s3, this.s4];
    list.forEach((ship) => {
      if (!ship.isSunk()) {
        return false;
      }
    });
    return false;
  }
}
