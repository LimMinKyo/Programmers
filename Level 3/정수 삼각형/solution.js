function solution(triangle) {
  const n = triangle.length;
  const dp = Array.from({ length: n }, (_, i) => new Array(i + 1).fill(0));

  dp[n - 1] = triangle.at(-1);

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
}
