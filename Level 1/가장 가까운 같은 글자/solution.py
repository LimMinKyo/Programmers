def solution(s):
    char_dict = {}

    answer = []

    for index, char in enumerate(s):
        answer.append(-1 if char not in char_dict else index - char_dict[char])
        char_dict[char] = index

    return answer
