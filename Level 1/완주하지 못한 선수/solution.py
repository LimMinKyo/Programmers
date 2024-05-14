from collections import Counter


def solution(participants, completions):
    return list((Counter(participants) - Counter(completions)).keys())[0]
