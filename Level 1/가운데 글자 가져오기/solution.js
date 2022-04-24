function solution(s) {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[middle] : s[middle - 1] + s[middle];
}
