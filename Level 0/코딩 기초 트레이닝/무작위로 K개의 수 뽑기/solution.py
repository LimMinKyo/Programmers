def solution(arr, k):
    answer = []

    for num in arr:
        if len(answer) == k:
            return answer
        if not num in answer:
            answer.append(num)

    return answer + [-1] * (k - len(answer))
