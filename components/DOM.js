export function creategrid(Player) {
  const div = document.createElement("div");
  div.classList.add("gameboard");
  for (let i = 0; i < 10; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener("click", reaction(Event, Player));
      rowDiv.appendChild(cell);
    }
    div.appendChild(rowDiv);
  }
  return div;
}

function reaction(Event, Player) {
  let x = Event.target.dataset.row;
  let y = Event.target.dataset.row;
  Player.attacked(x, y);
  if (typeof Player.gameboard.board[x][y] == "number") {
    Event.target.style.backgound = "red";
  } else {
    Event.target.textContent = ".";
  }
}
