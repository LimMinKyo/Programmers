function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((value) => +value)
    .reverse();
  return answer;
}
