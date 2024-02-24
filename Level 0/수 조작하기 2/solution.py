operations = {
    1: "w",
    -1: "s",
    10: "d",
    -10: "a",
}


def solution(numLog):
    answer = ""

    for index in range(1, len(numLog)):
        answer += operations[numLog[index] - numLog[index - 1]]

    return answer
