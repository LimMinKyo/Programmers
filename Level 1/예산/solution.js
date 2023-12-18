function solution(d, budget) {
  d.sort((a, b) => b - a);

  let answer = 0;

  while (d.at(-1) <= budget) {
    budget -= d.pop();
    answer++;
  }

  return answer;
}
