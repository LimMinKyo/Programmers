function solution(board) {
  const N = board.length;
  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(directions.length).fill(0))
  );
  const queue = [[0, 0, -1, 0]];

  let answer = Infinity;

  while (queue.length) {
    const [x, y, prevDirection, cost] = queue.shift();

    directions.forEach(([dx, dy], direction) => {
      const [nx, ny] = [x + dx, y + dy];

      if (isBlocked(nx, ny, N, board)) {
        return;
      }

      const newCost = calculateCost(direction, prevDirection, cost);

      if (nx === N - 1 && ny === N - 1) {
        answer = Math.min(answer, newCost);
      } else if (isShouldUpdate(x, y, direction, newCost, visited)) {
        visited[x][y][direction] = newCost;
        queue.push([nx, ny, direction, newCost]);
      }
    });
  }

  return answer;
}

function isValid(x, y, N) {
  return x >= 0 && x < N && y >= 0 && y < N;
}

function isBlocked(x, y, N, board) {
  return (x === 0 && y === 0) || !isValid(x, y, N) || board[x][y] === 1;
}

function calculateCost(direction, prevDirection, cost) {
  return prevDirection === -1 || prevDirection === direction
    ? cost + 100
    : cost + 600;
}

function isShouldUpdate(x, y, direction, newCost, visited) {
  return visited[x][y][direction] === 0 || visited[x][y][direction] > newCost;
}
