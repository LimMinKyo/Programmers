import math


def solution(num, total):
    average = total / num
    start = math.ceil(average - num // 2)
    return [start + i for i in range(num)]
