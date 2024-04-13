import itertools


def solution(arr, intervals):
    return list(itertools.chain(*[arr[start : end + 1] for start, end in intervals]))
