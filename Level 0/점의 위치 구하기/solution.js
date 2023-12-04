function solution(dot) {
  const [x, y] = dot;

  return x < 0 ? (y < 0 ? 3 : 2) : y < 0 ? 4 : 1;
}
