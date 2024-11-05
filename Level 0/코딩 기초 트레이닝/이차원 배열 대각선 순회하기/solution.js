function solution(board, k) {
  let answer = 0;

  board.forEach((row, i) => {
    row.forEach((_, j) => {
      if (i + j <= k) {
        answer += board[i][j];
      }
    });
  });

  return answer;
}
