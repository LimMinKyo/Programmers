operators = {
    "+": lambda a, b: a + b,
    "-": lambda a, b: a - b,
    "*": lambda a, b: a * b,
}


def solution(binomial):
    a, operator, b = binomial.split(" ")
    return operators[operator](int(a), int(b))
