def solution(msg):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    dict = {key: value for key, value in zip(alphabet, list(range(1, 27)))}

    answer = []

    while True:
        if msg in dict:
            answer.append(dict[msg])
            break

        for i in range(1, len(msg) + 1):
            if msg[0:i] not in dict:
                answer.append(dict[msg[0 : i - 1]])
                dict[msg[0:i]] = len(dict) + 1
                msg = msg[i - 1 :]
                break

    return answer
