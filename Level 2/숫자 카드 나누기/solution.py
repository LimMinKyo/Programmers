import math
from functools import reduce


def solution(arrayA, arrayB):
    gcd_A = reduce(math.gcd, arrayA)
    gcd_B = reduce(math.gcd, arrayB)

    max_a = 0

    divisors_A = get_divisors(gcd_A)
    for divisor in divisors_A:
        if cannot_divide_any(divisor, arrayB):
            max_a = max(max_a, divisor)
            break 

    divisors_B = get_divisors(gcd_B)
    for divisor in divisors_B:
        if cannot_divide_any(divisor, arrayA):
            max_a = max(max_a, divisor)
            break

    return max_a


def get_divisors(n):
    divisors = []

    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            divisors.append(i)
            if i != n // i:
                divisors.append(n // i)

    return sorted(divisors, reverse=True)


def cannot_divide_any(divisor, array):
    return all(num % divisor != 0 for num in array)
