export function creategrid(Player, turn) {
  const div = document.createElement("div");
  div.classList.add("gameboard");
  for (let i = 0; i < 10; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-col", j);
      if (Player.name != "Computer" && Player.gameboard.board[i][j] > 0) {
        cell.style.background = "#00d26a";
      }
      if (typeof Player.gameboard.board[i][j] != "number") {
        cell.textContent = Player.gameboard.board[i][j];
        cell.classList.add("disabled");
      } else if (Player.gameboard.board[i][j] < 0) {
        cell.style.background = "red";
        cell.classList.add("disabled");
      }
      cell.addEventListener("click", (Event) => {
        let x = Event.currentTarget.dataset.row;
        let y = Event.currentTarget.dataset.col;
        // console.log(x, y);
        Player.attacked(x, y);
        if (typeof Player.gameboard.board[x][y] == "number") {
          Event.target.style.background = "red";
        } else {
          Event.target.textContent = Player.gameboard.board[i][j];
        }
        cell.classList.add("disabled");
        turn();
      });
      rowDiv.appendChild(cell);
    }
    div.appendChild(rowDiv);
  }
  return div;
}
