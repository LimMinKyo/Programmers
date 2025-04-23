from collections import deque


def solution(order):
    n = len(order)
    queue = deque(order)
    stack = []

    answer = 0

    for i in range(1, n + 1):
        stack.append(i)

        while stack and stack[-1] == queue[0]:
            queue.popleft()
            stack.pop()
            answer += 1

    return answer
