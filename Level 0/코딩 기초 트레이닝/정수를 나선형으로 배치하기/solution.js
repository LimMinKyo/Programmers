function solution(n) {
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let x = 0;
  let y = 0;
  let m = 0;

  const answer = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 1; i <= n ** 2; i++) {
    answer[y][x] = i;
    if (
      x + move[m][0] >= n ||
      y + move[m][1] >= n ||
      answer[y + move[m][1]][x + move[m][0]] !== 0
    ) {
      m = (m + 1) % move.length;
    }
    x = x + move[m][0];
    y = y + move[m][1];
  }

  return answer;
}
