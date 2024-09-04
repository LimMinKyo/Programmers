from itertools import combinations_with_replacement
from collections import Counter


def calculate_score(combination, info):
    lion_score, apeach_score = 0, 0

    for i in range(1, 11):
        if info[10 - i] < combination.count(i):
            lion_score += i
        elif info[10 - i] > 0:
            apeach_score += i

    return lion_score, apeach_score


def solution(n, info):
    max_diff, max_combination = 0, {}

    for combination in combinations_with_replacement(range(11), n):
        lion_score, apeach_score = calculate_score(combination, info)
        diff = lion_score - apeach_score
        if diff > max_diff:
            max_diff = diff
            max_combination = combination

    if max_diff <= 0:
        return [-1]
    else:
        answer = [0] * 11
        counter = Counter(max_combination)

        for n in counter:
            answer[10 - n] = counter[n]

        return answer
