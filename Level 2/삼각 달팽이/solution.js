function solution(n) {
  let num = 0;

  const pyramid = Array.from({ length: n }, (_, index) => {
    const rowLength = index + 1;
    num += rowLength;
    return new Array(rowLength).fill(0);
  });

  let direction = "down";
  let [x, y] = [0, 0];

  for (let i = 1; i <= num; i++) {
    pyramid[y][x] = i;

    switch (direction) {
      case "down":
        if (y + 1 < n && pyramid[y + 1][x] === 0) {
          y++;
        } else {
          x++;
          direction = "right";
        }
        break;
      case "right":
        if (x + 1 < n && pyramid[y][x + 1] === 0) {
          x++;
        } else {
          x--;
          y--;
          direction = "upLeft";
        }
        break;
      case "upLeft":
        if (x - 1 >= 0 && y - 1 >= 0 && pyramid[y - 1][x - 1] === 0) {
          x--;
          y--;
        } else {
          y++;
          direction = "down";
        }
        break;
    }
  }

  return pyramid.flat();
}
