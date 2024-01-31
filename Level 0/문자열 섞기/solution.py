def solution(str1, str2):
    return "".join([str1[index] + str2[index] for index in range(len(str1))])
