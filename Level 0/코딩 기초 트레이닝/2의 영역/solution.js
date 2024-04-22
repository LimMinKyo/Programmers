function solution(arr) {
  const start = arr.indexOf(2);
  const end = arr.lastIndexOf(2);
  return start >= 0 ? arr.slice(start, end + 1) : [-1];
}
