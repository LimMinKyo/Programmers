function solution(maps) {
  const [n, m] = [maps.length, maps[0].length];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let end = [];

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(2).fill(false))
  );
  const queue = [];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (maps[x][y] === "S") {
        queue.push([x, y, 0, 0]);
        visited[x][y][0] = true;
      }
      if (maps[x][y] === "E") {
        end = [x, y];
      }
    }
  }

  while (queue.length) {
    const [x, y, k, time] = queue.shift();

    if (x === end[0] && y === end[1] && k === 1) {
      return time;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (!isValidMove(nx, ny, n, m, maps)) {
        continue;
      }

      if (maps[nx][ny] === "L") {
        appendQueue(nx, ny, 1, time + 1, visited, queue);
      } else {
        appendQueue(nx, ny, k, time + 1, visited, queue);
      }
    }
  }

  return -1;
}

function isValidMove(nx, ny, n, m, maps) {
  return nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] !== "X";
}

function appendQueue(nx, ny, k, time, visited, queue) {
  if (!visited[nx][ny][k]) {
    visited[nx][ny][k] = true;
    queue.push([nx, ny, k, time]);
  }
}
