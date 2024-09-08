def solution(myString):
    return "".join(char if char > "l" else "l" for char in myString)
