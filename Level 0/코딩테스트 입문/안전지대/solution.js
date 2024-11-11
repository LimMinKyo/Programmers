function solution(board) {
  const n = board.length;
  const map = Array.from({ length: n }, () => Array(n).fill(0));
  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  board.forEach((row, x) => {
    row.forEach((_, y) => {
      if (board[x][y] === 1) {
        map[x][y] = 1;
        directions.forEach(([dx, dy]) => {
          const [nx, ny] = [x + dx, y + dy];
          if (0 <= nx && nx < n && 0 <= ny && ny < n) {
            map[nx][ny] = 1;
          }
        });
      }
    });
  });

  return map.flat().filter((value) => value === 0).length;
}
