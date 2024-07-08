function solution(arr) {
  return arr.map((a) => Array(a).fill(a)).flat();
}
