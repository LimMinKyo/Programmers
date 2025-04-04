function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i].forEach((_, j) => {
      land[i][j] += Math.max(
        ...land[i - 1].slice(0, j),
        ...land[i - 1].slice(j + 1)
      );
    });
  }

  return Math.max(...land.at(-1));
}
