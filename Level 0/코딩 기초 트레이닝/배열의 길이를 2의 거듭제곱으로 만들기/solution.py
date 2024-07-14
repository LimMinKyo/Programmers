import math


def solution(arr):
    target_length = 2 ** math.ceil(math.log2(len(arr)))
    return arr + [0] * (target_length - len(arr))
