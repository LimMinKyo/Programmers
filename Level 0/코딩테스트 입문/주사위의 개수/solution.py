import math


def solution(box, n):
    return math.prod(line // n for line in box)
