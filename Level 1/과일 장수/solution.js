function solution(k, m, score) {
  score.sort((a, b) => a - b);

  let answer = 0;

  for (let i = score.length % m; i < score.length; i += m) {
    answer += score[i] * m;
  }

  return answer;
}
