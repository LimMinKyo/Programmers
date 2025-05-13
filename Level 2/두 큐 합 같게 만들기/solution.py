from collections import deque


def solution(queue1, queue2):
    answer = 0

    q1 = deque(queue1)
    q2 = deque(queue2)

    sum1 = sum(queue1)
    sum2 = sum(queue2)

    while True:
        if answer == len(queue1) * 4:
            return -1

        if sum1 > sum2:
            num = q1.popleft()
            q2.append(num)
            sum1 -= num
            sum2 += num
            answer += 1
        elif sum1 < sum2:
            num = q2.popleft()
            q1.append(num)
            sum2 -= num
            sum1 += num
            answer += 1
        else:
            return answer
