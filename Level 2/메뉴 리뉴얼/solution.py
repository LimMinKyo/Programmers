from itertools import combinations
from collections import Counter


def solution(orders, courses):
    answer = []

    for course in courses:
        menus = []

        for order in orders:
            menus += combinations(sorted(order), course)

        most_ordered_menus = Counter(menus).most_common()

        answer += [
            "".join(menu)
            for menu, count in most_ordered_menus
            if count > 1 and count == most_ordered_menus[0][1]
        ]

    return sorted(answer)
