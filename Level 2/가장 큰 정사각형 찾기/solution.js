function solution(board) {
  const ROW = board[0].length;
  const COL = board.length;

  for (let i = 1; i < COL; i++) {
    for (let j = 1; j < ROW; j++) {
      if (board[i][j] === 1) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const upLeft = board[i - 1][j - 1];

        board[i][j] = Math.min(up, left, upLeft) + 1;
      }
    }
  }

  const maxValue = Math.max(...board.map((row) => Math.max(...row)));

  return maxValue ** 2;
}
