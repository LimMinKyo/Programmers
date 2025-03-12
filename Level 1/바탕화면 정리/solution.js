function solution(wallpaper) {
  const xArr = [];
  const yArr = [];

  wallpaper.forEach((row, y) => {
    [...row].forEach((_, x) => {
      if (wallpaper[y][x] === "#") {
        xArr.push(x);
        yArr.push(y);
      }
    });
  });

  return [
    Math.min(...yArr),
    Math.min(...xArr),
    Math.max(...yArr) + 1,
    Math.max(...xArr) + 1,
  ];
}
