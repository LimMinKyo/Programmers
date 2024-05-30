from collections import Counter
from functools import reduce


def solution(clothes):
    counter = Counter(kind for cloth, kind in clothes)

    return reduce(lambda acc, count: acc * (count + 1), counter.values(), 1) - 1
