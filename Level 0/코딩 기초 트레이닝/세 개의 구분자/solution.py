import re


def solution(myStr):
    answer = [i for i in re.split("[a|b|c]", myStr) if i]
    return answer or ["EMPTY"]
