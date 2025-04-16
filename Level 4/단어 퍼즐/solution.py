def solution(strs, t):
    n = len(t)
    sizes = set(len(str) for str in strs)

    dp = [float("inf")] * (n + 1)
    dp[0] = 0

    for i in range(1, n + 1):
        for size in sizes:
            if i - size >= 0 and t[i - size : i] in strs:
                dp[i] = min(dp[i], dp[i - size] + 1)

    return dp[n] if dp[n] < float("inf") else -1
