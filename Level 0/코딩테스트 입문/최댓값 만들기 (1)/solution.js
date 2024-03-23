function solution(numbers) {
  const [num1, num2] = numbers.sort((a, b) => b - a);
  return num1 * num2;
}
