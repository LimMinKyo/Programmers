function solution(sides) {
  const [side1, side2, side3] = sides.sort((a, b) => b - a);
  return side1 < side2 + side3 ? 1 : 2;
}
