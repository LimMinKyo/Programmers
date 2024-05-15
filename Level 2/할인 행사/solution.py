def solution(wants, numbers, discounts):
    answer = 0

    wants_dict = {}

    for index, want in enumerate(wants):
        wants_dict[want] = numbers[index]

    for i in range(len(discounts) - 9):
        discounts_10d = {}

        for discount in discounts[i : i + 10]:
            discounts_10d[discount] = discounts_10d.get(discount, 0) + 1

        if wants_dict == discounts_10d:
            answer += 1

    return answer
