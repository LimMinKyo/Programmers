from collections import deque


def solution(priorities, location):
    queue = deque((index, priority) for index, priority in enumerate(priorities))

    answer = 1

    while queue:
        poped_index, poped_priority = queue.popleft()

        if any(priority > poped_priority for _, priority in queue):
            queue.append((poped_index, poped_priority))
            continue
        else:
            if poped_index == location:
                return answer
            else:
                answer += 1
