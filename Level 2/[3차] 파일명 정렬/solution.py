import re


def solution(files):
    files = [re.split(r"([0-9]+)", file) for file in files]

    files.sort(key=lambda x: (x[0].lower(), int(x[1])))

    return ["".join(file) for file in files]
