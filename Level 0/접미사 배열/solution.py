def solution(my_string):
    return sorted(my_string[index:] for index in range(len(my_string)))
