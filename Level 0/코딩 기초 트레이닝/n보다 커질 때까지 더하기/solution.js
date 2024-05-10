function solution(numbers, n) {
  let answer = 0;

  for (const number of numbers) {
    if (answer > n) break;

    answer += number;
  }

  return answer;
}
