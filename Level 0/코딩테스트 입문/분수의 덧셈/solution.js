function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  let greatestCommonDivisor = 1;

  for (let i = 1; i <= Math.min(numer, denom); i++) {
    if (numer % i === 0 && denom % i === 0) {
      greatestCommonDivisor = i;
    }
  }

  numer = numer / greatestCommonDivisor;
  denom = denom / greatestCommonDivisor;

  return [numer, denom];
}
