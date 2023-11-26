function solution(n) {
  let orderdPairCount = 0;
  const sqrt = ~~Math.sqrt(n);

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      orderdPairCount++;
    }
  }

  return sqrt ** 2 === n ? orderdPairCount * 2 - 1 : orderdPairCount * 2;
}
