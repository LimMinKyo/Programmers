function solution(arr) {
  const sum = arr.reduce((a, b) => a + b);
  const average = sum / arr.length;
  return average;
}
