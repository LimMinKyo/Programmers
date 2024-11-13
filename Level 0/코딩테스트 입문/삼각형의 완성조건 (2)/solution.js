function solution(sides) {
  const longSide = Math.max(...sides);
  const otherSide = Math.min(...sides);
  const diff = longSide - otherSide;
  const sum = longSide + otherSide;

  const firstCases = longSide - diff;
  const secondCases = sum - (longSide + 1);

  return firstCases + secondCases;
}
