const directionMap = { W: [-1, 0], N: [0, -1], S: [0, 1], E: [1, 0] };

function solution(park, routes) {
  const width = park[0].length;
  const height = park.length;

  let robotDog = [];

  park.forEach((row, y) => {
    row.split("").forEach((coord, x) => {
      if (coord === "S") {
        robotDog = [x, y];
      }
    });
  });

  routes.forEach((route) => {
    const [direction, distance] = route.split(" ");
    const [x, y] = robotDog;
    const [dx, dy] = directionMap[direction];
    let isValidRoute = true;
    let [nx, ny] = [x, y];

    for (let i = 1; i <= +distance; i++) {
      [nx, ny] = [x + dx * i, y + dy * i];

      if (
        0 <= nx &&
        nx < width &&
        0 <= ny &&
        ny < height &&
        park[ny][nx] !== "X"
      ) {
        continue;
      } else {
        isValidRoute = false;
        break;
      }
    }

    if (isValidRoute) robotDog = [nx, ny];
  });

  return robotDog.reverse();
}
