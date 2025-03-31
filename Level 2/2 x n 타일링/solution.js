function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1;
  let b = 2;
  let target;

  for (let i = 3; i <= n; i++) {
    target = (a + b) % 1_000_000_007;
    a = b;
    b = target;
  }

  return target;
}
