def solution(arr):
    answer = 0
    before = []

    while before != arr:
        before = arr.copy()

        for i, num in enumerate(arr):
            if num >= 50 and not num % 2:
                arr[i] = num / 2
            elif num < 50 and num % 2:
                arr[i] = num * 2 + 1
            else:
                arr[i] = num

        answer += 1

    return answer - 1
