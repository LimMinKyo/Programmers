def solution(arr, queries):
    for start, end in queries:
        for i in range(start, end + 1):
            arr[i] += 1

    return arr
