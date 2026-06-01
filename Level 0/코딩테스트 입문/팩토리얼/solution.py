def solution(n):
    i = 1
    factorial = 1

    while n >= factorial:
        i += 1
        factorial *= i

    return i - 1
