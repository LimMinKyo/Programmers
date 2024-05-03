import math


def solution(progresses, speeds):
    answer = []

    count = 0
    max_day = None

    for progress, speed in zip(progresses, speeds):
        day_left = math.ceil((100 - progress) / speed)

        if max_day is None:
            max_day = day_left

        if day_left <= max_day:
            count += 1
        else:
            answer.append(count)
            count = 1
            max_day = day_left

    answer.append(count)

    return answer
