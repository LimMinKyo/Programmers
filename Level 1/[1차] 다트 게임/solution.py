import re


def solution(dartResult):
    bonus_dict = {"S": 1, "D": 2, "T": 3}
    option_dict = {"": 1, "*": 2, "#": -1}

    darts = re.findall("(\d+)([SDT])([*#]?)", dartResult)

    scores = []

    for index, (score, bonus, option) in enumerate(darts):
        if option == "*" and index > 0:
            scores[index - 1] *= 2
        scores.append(int(score) ** bonus_dict[bonus] * option_dict[option])

    return sum(scores)
