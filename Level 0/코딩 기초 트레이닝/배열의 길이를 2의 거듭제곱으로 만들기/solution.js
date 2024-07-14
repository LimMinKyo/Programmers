function solution(arr) {
  const targetLength = 2 ** Math.ceil(Math.log2(arr.length));
  return [...arr, ...Array(targetLength - arr.length).fill(0)];
}
