function solution(n) {
  let result = 1;

  for (let i = 1; i < n / 2; i++) {
    let sum = i;
    let num = i;

    while (true) {
      num++;
      sum += num;

      if (sum === n) {
        result++;
        break;
      }

      if (sum > n) {
        break;
      }
    }
  }

  return result;
}
