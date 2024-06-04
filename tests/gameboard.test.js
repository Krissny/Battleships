import { GameBoard } from "../components/gameboard";

test("constructor works properly", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.s1.length).toBe(5);
  expect(gameBoard.s2.length).toBe(4);
  expect(gameBoard.s3.length).toBe(3);
  expect(gameBoard.s4.length).toBe(2);
});

test("Receive attack works", () => {
  const gameBoard = new GameBoard();
  gameBoard.board[0][0] = 2; // there is a ship
  const coord = { x: 0, y: 0 };
  expect(gameBoard.receiveAttack(coord)).toBe(true);
  expect(gameBoard.s2.hitCount).toBe(1);
});

test("Check invalid coordinates", () => {
  const gameBoard = new GameBoard();
  const coord = { x: -1, y: 2 };
  expect(gameBoard.outOfBound(coord)).toBe(true);
});
test("Check valid coordinates", () => {
  const gameBoard = new GameBoard();
  const coord = { x: 0, y: 0 };
  expect(gameBoard.outOfBound(coord)).toBe(false);
});

test("placeShips works correctly with valid coordinates", () => {
  const gameBoard = new GameBoard();
  const place = {
    start: {
      x: 0,
      y: 0,
    },
    end: {
      x: 5,
      y: 0,
    },
  };
  expect(gameBoard.placeShips(place.start, place.end, gameBoard.s1)).toBe(true);
});
test("placeShips works correctly with invalid coordinates", () => {
  const gameBoard = new GameBoard();
  const place = {
    start: {
      x: -1,
      y: 0,
    },
    end: {
      x: 5,
      y: 0,
    },
  };
  expect(gameBoard.placeShips(place.start, place.end, gameBoard.s1)).toBe(
    false
  );
});

test("All ships are sunk", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.shipsSunk()).toBe(false);
});
