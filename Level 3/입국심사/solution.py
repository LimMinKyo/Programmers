def solution(n, times):
    low = 1
    high = n * max(times)

    while low <= high:
        mid = (low + high) // 2
        count = sum(mid // time for time in times)

        if count < n:
            low = mid + 1
        else:
            high = mid - 1

    return low
