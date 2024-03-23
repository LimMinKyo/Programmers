function solution(a, d, included) {
  return included.reduce(
    (acc, isInclude, index) => (isInclude ? acc + a + d * index : acc),
    0
  );
}
