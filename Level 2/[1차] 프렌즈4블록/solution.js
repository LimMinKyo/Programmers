function solution(m, n, board) {
  board = board.map((row) => [...row]);
  let answer = 0;

  while (true) {
    const count = countBlock(m, n, board);

    if (count === 0) {
      break;
    }

    answer += count;
  }

  return answer;
}

function countBlock(m, n, board) {
  let count = 0;
  const checkBoard = Array.from({ length: m }, () => new Array(n).fill(0));

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      const a = board[i][j];
      const b = board[i + 1][j];
      const c = board[i][j + 1];
      const d = board[i + 1][j + 1];

      if ([b, c, d].every((block) => block === a) && a !== "0") {
        checkBoard[i][j] = 1;
        checkBoard[i + 1][j] = 1;
        checkBoard[i][j + 1] = 1;
        checkBoard[i + 1][j + 1] = 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (checkBoard[i][j] === 1) {
        board[i][j] = "0";
        count += 1;
      }
    }
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      let k = i;

      while (k + 1 >= 0 && k + 1 < m && board[k + 1][j] === "0") {
        k++;
      }

      if (k !== i) {
        board[k][j] = board[i][j];
        board[i][j] = "0";
      }
    }
  }

  return count;
}
