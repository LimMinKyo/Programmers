function solution(n) {
  const set = new Set();

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      set.add(i);
      set.add(n / i);
    }
  }

  return [...set].sort((a, b) => a - b);
}
