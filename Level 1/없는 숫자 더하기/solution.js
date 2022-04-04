function solution(numbers) {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    if (numbers.indexOf(i) === -1) {
      result.push(i);
    }
  }
  const sum = result.reduce((a, b) => a + b);
  return sum;
}
