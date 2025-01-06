function solution(i, j, k) {
  let answer = 0;

  for (let n = i; n <= j; n++) {
    [...n.toString()].forEach((num) => {
      if (+num === k) {
        answer++;
      }
    });
  }

  return answer;
}
