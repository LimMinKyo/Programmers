import re


def solution(new_id):
    answer = new_id.lower()
    answer = re.sub("[^a-z0-9-_.]", "", answer)
    answer = re.sub("[.]+", ".", answer)
    answer = re.sub("^[.]|[.]$", "", answer)
    answer = answer if answer else "a"
    answer = answer[:15]
    answer = re.sub("[.]$", "", answer)
    return answer if len(answer) > 3 else answer + answer[-1] * (3 - len(answer))
