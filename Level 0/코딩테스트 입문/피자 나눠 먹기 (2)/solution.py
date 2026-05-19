import math


def solution(n):
    gcd = math.gcd(n, 6)
    return n / gcd
