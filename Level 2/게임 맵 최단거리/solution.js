function solution(maps) {
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const n = maps.length;
  const m = maps[0].length;

  const queue = [];

  queue.push([0, 0, 1]);
  maps[0][0] = 0;

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    if (x === m - 1 && y === n - 1) {
      return distance;
    }

    moves.forEach((move) => {
      const [dx, dy] = move;
      const [nx, ny] = [x + dx, y + dy];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && maps[ny][nx] !== 0) {
        maps[ny][nx] = 0;
        queue.push([nx, ny, distance + 1]);
      }
    });
  }

  return -1;
}
