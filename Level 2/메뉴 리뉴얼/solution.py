from itertools import combinations
from collections import Counter


def solution(orders, courses):
    answer = []

    for course in courses:
        menus = []

        for order in orders:
            menus += combinations(sorted(order), course)

        counter = Counter(menus)

        for menu, count in counter.items():
            max_count = max(counter.values())
            if max_count != 1 and count == max_count:
                answer.append("".join(menu))

    return sorted(answer)
