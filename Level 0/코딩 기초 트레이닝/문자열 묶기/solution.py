from collections import Counter


def solution(strArr):
    return Counter(len(str) for str in strArr).most_common(1)[0][1]
