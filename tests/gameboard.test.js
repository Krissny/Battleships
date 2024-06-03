import { GameBoard } from "../components/gameboard";

test("constructor works properly", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.s1.length).toBe(5);
  expect(gameBoard.s2.length).toBe(4);
  expect(gameBoard.s3.length).toBe(3);
  expect(gameBoard.s4.length).toBe(2);
});
