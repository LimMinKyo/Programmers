function solution(box, n) {
  return box.reduce((acc, line) => acc * Math.floor(line / n), 1);
}
