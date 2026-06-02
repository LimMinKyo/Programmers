def solution(my_string):
    return sorted([int(char) for char in my_string if char.isdigit()])
