from collections import Counter


def solution(toppings):
    answer = 0

    right_topping_counter = Counter(toppings)
    left_topping_set = set()

    for topping in toppings:
        left_topping_set.add(topping)
        right_topping_counter[topping] -= 1

        if right_topping_counter[topping] == 0:
            right_topping_counter.pop(topping)

        if len(left_topping_set) == len(right_topping_counter):
            answer += 1

    return answer
