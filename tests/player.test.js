import { Player } from "../components/player";

test("Constructor sets name", () => {
  const player = new Player("Krishna");
  expect(player.name).toBe("Krishna");
});

test("Player being attacked", () => {
  const player = new Player("Krishna");
  player.attacked(0, 0);
  expect(player.gameboard.shipsSunk()).toBe(false);
});
