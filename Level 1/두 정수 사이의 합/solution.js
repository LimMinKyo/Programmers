function solution(a, b) {
  const [num1, num2] = [a, b].sort((a, b) => a - b);

  if (num1 === num2) return num1;

  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}
