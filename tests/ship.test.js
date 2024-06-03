import { Ship } from "../components/ship";

test("constructor sets length", () => {
  const lengths = [0, 1, 2, 3, 4, 5];
  lengths.forEach((i, elem) => {
    expect(new Ship(i).length).toBe(i);
  });
});

test("sunk and hit property work", () => {
  const ship = new Ship(4);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
