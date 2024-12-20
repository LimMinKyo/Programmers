function solution(a, b) {
  let gcd = 1;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  b /= gcd;

  [2, 5].forEach((num) => {
    while (b % num === 0) {
      b /= num;
    }
  });

  return b === 1 ? 1 : 2;
}
