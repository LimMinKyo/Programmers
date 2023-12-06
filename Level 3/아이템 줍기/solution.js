function solution(rectangle, characterX, characterY, itemX, itemY) {
  const MAX_LENGTH = 101;
  const map = Array.from({ length: MAX_LENGTH }, () =>
    Array(MAX_LENGTH).fill(0)
  );

  const doubleRectangle = rectangle.map((current) =>
    current.map((point) => point * 2)
  );

  doubleRectangle.forEach(([x1, y1, x2, y2]) => {
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        if (x === x1 || x === x2 || y === y1 || y === y2) {
          if (map[x][y] === 1) {
            continue;
          } else {
            map[x][y] += 1;
          }
        } else {
          map[x][y] += 2;
        }
      }
    }
  });

  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  const directionX = [-1, 1, 0, 0];
  const directionY = [0, 0, -1, 1];

  const queue = [[characterX, characterY, 0]];
  map[characterX][characterY] += MAX_LENGTH;

  while (queue.length) {
    const [currentX, currentY, count] = queue.shift();

    if (currentX === itemX && currentY === itemY) {
      return count / 2;
    }

    for (let i = 0; i < 4; i++) {
      const nX = currentX + directionX[i];
      const nY = currentY + directionY[i];
      if (nX >= 0 && nX < MAX_LENGTH && nY >= 0 && nY < MAX_LENGTH) {
        if (map[nX][nY] === 1) {
          map[nX][nY] += MAX_LENGTH;
          queue.push([nX, nY, count + 1]);
        }
      }
    }
  }
}
