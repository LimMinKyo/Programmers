def solution(my_string, indices):
    return "".join(char for index, char in enumerate(my_string) if not index in indices)
