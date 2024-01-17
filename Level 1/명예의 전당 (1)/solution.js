function solution(k, scores) {
  const answer = [];
  const stack = [];

  scores.forEach((score) => {
    if (stack.length < k) {
      stack.push(score);
    }

    if (score > stack.at(-1)) {
      stack[stack.length - 1] = score;
    }

    answer.push(Math.min(...stack));
    stack.sort((a, b) => b - a);
  });

  return answer;
}
