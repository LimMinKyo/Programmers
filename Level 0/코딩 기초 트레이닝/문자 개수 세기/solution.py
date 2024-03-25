def solution(my_string):
    answer = [0] * 52

    for char in my_string:
        if char.isupper():
            answer[ord(char) - 65] += 1
        else:
            answer[ord(char) - 97 + 26] += 1

    return answer
