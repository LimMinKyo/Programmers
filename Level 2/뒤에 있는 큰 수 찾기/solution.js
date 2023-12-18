function solution(numbers) {
  const length = numbers.length;
  const answer = Array(length).fill(-1);
  const stack = [];

  for (let i = length - 1; i >= 0; i--) {
    while (numbers[i] >= stack.at(-1)) {
      stack.pop();
    }

    if (stack.length) {
      answer[i] = stack.at(-1);
    }

    stack.push(numbers[i]);
  }

  return answer;
}
