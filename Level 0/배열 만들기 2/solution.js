function solution(l, r) {
  const answer = [];

  for (let i = l; i <= r; i++) {
    if (!i.toString().replaceAll(/[05]/g, "")) {
      answer.push(i);
    }
  }

  return answer.length ? answer : [-1];
}
