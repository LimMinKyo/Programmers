def solution(sequence, k):
    n = len(sequence)
    answer = (0, n)
    left, right = 0, 0
    sum = sequence[0]

    while True:
        if sum < k:
            right += 1
            if right == n:
                break
            sum += sequence[right]
        else:
            if sum == k and right - left < answer[1] - answer[0]:
                answer = (left, right)
            sum -= sequence[left]
            left += 1

    return answer
