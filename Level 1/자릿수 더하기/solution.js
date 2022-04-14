function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((value) => +value)
    .reduce((a, b) => a + b);
  return answer;
}
