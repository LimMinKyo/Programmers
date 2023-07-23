function solution(s) {
  const numbers = s.split(" ").map((item) => +item);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${min} ${max}`;
}
