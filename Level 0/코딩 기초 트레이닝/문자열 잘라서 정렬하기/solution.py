def solution(myString):
    return sorted(char for char in myString.split("x") if char)
