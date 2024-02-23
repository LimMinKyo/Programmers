const operations = {
  w: 1,
  s: -1,
  d: 10,
  a: -10,
};

function solution(n, control) {
  return [...control].reduce((acc, cur) => acc + operations[cur], n);
}
