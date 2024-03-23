function solution(n) {
  const set = new Set();

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      set.add(i);
    }
  }

  return [...set];
}
