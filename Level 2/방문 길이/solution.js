function solution(dirs) {
  const dirsMap = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  let character = [0, 0];
  const routes = [];

  [...dirs].forEach((dir) => {
    const route = [character];
    const [dX, dY] = dirsMap[dir];
    const [nX, nY] = [character[0] + dX, character[1] + dY];

    if (nX >= -5 && nX <= 5 && nY >= -5 && nY <= 5) {
      character = [nX, nY];
      route.push(character);
      if (checkRoute(route, routes)) {
        routes.push(route);
      }
    }
  });

  return routes.length;
}

function checkRoute(value, routes) {
  for (const route of routes) {
    if (
      JSON.stringify(value) === JSON.stringify(route) ||
      JSON.stringify(value) === JSON.stringify([...route].reverse())
    ) {
      return false;
    }
  }

  return true;
}
