function solution(queue1, queue2) {
  let answer = 0;

  const max = queue1.length * 2;

  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

  let [i, j] = [0, 0];

  while (true) {
    if (answer === max * 2) {
      return -1;
    }

    if (sum1 > sum2) {
      const value = queue1[i++];
      sum1 -= value;
      sum2 += value;
      queue2.push(value);
      answer++;
    } else if (sum1 < sum2) {
      const value = queue2[j++];
      sum2 -= value;
      sum1 += value;
      queue1.push(value);
      answer++;
    } else {
      return answer;
    }
  }
}
