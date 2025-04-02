def solution(triangle):
    n = len(triangle)
    dp = [[0] * i for i in range(1, n + 1)]
    dp[-1] = triangle[-1].copy()

    for i in range(n - 2, -1, -1):
        for j in range(len(dp[i])):
            dp[i][j] = max(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]

    return dp[0][0]
