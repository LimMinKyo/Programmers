from collections import Counter


def solution(k, tangerines):
    counter = Counter(tangerines)

    sorted_counter = sorted(counter.values(), reverse=True)

    answer = 0

    for tangerine in sorted_counter:
        if k <= 0:
            return answer

        k -= tangerine
        answer += 1

    return answer
