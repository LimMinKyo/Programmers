def solution(arr, queries):
    answer = []

    for s, e, k in queries:
        filterdArr = [i for i in arr[s : e + 1] if i > k]
        answer.append(min(filterdArr) if len(filterdArr) else -1)

    return answer
