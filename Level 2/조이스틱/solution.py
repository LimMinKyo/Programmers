def solution(name):
    answer = 0
    min_move = len(name) - 1

    for index, char in enumerate(name):
        answer += min(ord(char) - ord("A"), ord("Z") + 1 - ord(char))

        next_index = index + 1
        while next_index < len(name) and name[next_index] == "A":
            next_index += 1

        min_move = min(
            min_move,
            index * 2 + (len(name) - next_index),
            (len(name) - next_index) * 2 + index,
        )

    return answer + min_move
