function solution(money) {
  const n = money.length;
  const dp1 = new Array(n).fill(0);
  const dp2 = new Array(n).fill(0);

  dp1[0] = money[0];
  dp1[1] = money[0];
  for (let i = 2; i < n - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], money[i] + dp1[i - 2]);
  }

  dp2[1] = money[1];
  for (let i = 2; i < n; i++) {
    dp2[i] = Math.max(dp2[i - 1], money[i] + dp2[i - 2]);
  }

  return Math.max(dp1.at(-2), dp2.at(-1));
}
