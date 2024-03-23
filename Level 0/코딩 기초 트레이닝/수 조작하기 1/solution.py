operations = {
    "w": 1,
    "s": -1,
    "d": 10,
    "a": -10,
}


def solution(n, control):
    return n + sum([operations[operation] for operation in control])
