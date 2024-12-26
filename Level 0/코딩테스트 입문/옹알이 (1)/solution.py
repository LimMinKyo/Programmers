import re


def solution(babbling):
    return len(
        [word for word in babbling if re.compile("^(aya|ye|woo|ma)+$").match(word)]
    )
