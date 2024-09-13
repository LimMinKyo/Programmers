function solution(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => Number(i === j))
  );
}
