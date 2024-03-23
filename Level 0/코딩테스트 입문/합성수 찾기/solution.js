function solution(n) {
  const dp = new Array(n + 1).fill(false);

  for (let i = 2; i <= n; i++) {
    if (!dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = true;
      }
    }
  }

  return dp.filter((value) => value).length;
}
