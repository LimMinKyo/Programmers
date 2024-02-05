function solution(keyinput, board) {
  const direction = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };

  let character = [0, 0];

  keyinput.forEach((move) => {
    const [x, y] = character;
    const [dX, dY] = direction[move];
    const [nX, nY] = [x + dX, y + dY];

    if (Math.abs(nX) <= ~~(board[0] / 2) && Math.abs(nY) <= ~~(board[1] / 2)) {
      character = [nX, nY];
    }
  });

  return character;
}
