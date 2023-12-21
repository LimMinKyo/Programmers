function solution(t, p) {
  let answer = 0;

  for (let i = 0; i + p.length <= t.length; i++) {
    const target = t.slice(i, i + p.length);

    if (+target <= +p) {
      answer++;
    }
  }

  return answer;
}
