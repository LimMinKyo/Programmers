import functools


def solution(numbers):
    answer = "".join(
        sorted(
            map(str, numbers),
            key=functools.cmp_to_key(lambda a, b: int(b + a) - int(a + b)),
        )
    )
    return str(int(answer))
