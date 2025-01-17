import math


def get_measure_count(number):
    count = 0

    for i in range(1, int(math.sqrt(number)) + 1):
        if number % i == 0:
            count += 1
            if i * i != number:
                count += 1

    return count


def solution(number, limit, power):
    measure_counts = [get_measure_count(i) for i in range(1, number + 1)]
    return sum(power if count > limit else count for count in measure_counts)
