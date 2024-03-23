def solution(code):
    answer = ""
    mode = 0

    for index in range(len(code)):
        if code[index] == "1":
            mode = 0 if mode else 1
            continue

        if index % 2 == mode:
            answer += code[index]

    return answer if len(answer) else "EMPTY"
