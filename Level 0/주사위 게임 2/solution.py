def solution(a, b, c):
    dices = [a, b, c]
    size = len(set(dices))

    if size == 1:
        return calculate(dices, 3)
    elif size == 2:
        return calculate(dices, 2)
    elif size == 3:
        return calculate(dices)


def calculate(dices, n=1):
    a, b, c = dices
    result = 1

    for i in range(1, n + 1):
        result *= a**i + b**i + c**i

    return result
