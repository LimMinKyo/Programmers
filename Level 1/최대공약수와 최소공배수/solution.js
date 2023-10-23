function solution(n, m) {
  const minNum = Math.min(n, m);
  const maxNum = Math.max(n, m);
  let maxDivideNum;

  for (let i = 1; i <= minNum; i++) {
    if (minNum % i === 0 && maxNum % i === 0) {
      maxDivideNum = i;
    }
  }

  return [maxDivideNum, (n * m) / maxDivideNum];
}
