function solution(arrows) {
  let answer = 0;
  let x = 0;
  let y = 0;
  const visited = new Visited();
  visited.add([x, y]);
  const routes = new Routes();
  const [dx, dy] = [
    [0, 1, 1, 1, 0, -1, -1, -1],
    [1, 1, 0, -1, -1, -1, 0, 1],
  ];

  arrows.forEach((arrow) => {
    Array.from({ length: 2 }).forEach(() => {
      const [nx, ny] = [x + dx[arrow], y + dy[arrow]];

      if (visited.has([nx, ny]) && !routes.has([x, y, nx, ny])) {
        answer += 1;
      }

      visited.add([nx, ny]);
      routes.add([x, y, nx, ny]);
      routes.add([nx, ny, x, y]);
      x = nx;
      y = ny;
    });
  });

  return answer;
}

class Visited {
  constructor() {
    this.visited = new Set();
  }

  add(coord) {
    this.visited.add(JSON.stringify(coord));
  }

  has(coord) {
    return this.visited.has(JSON.stringify(coord));
  }
}

class Routes {
  constructor() {
    this.routes = new Set();
  }

  add(route) {
    this.routes.add(JSON.stringify(route));
  }

  has(route) {
    return this.routes.has(JSON.stringify(route));
  }
}
