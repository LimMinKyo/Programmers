def solution(age):
    return "".join(chr(int(num) + 97) for num in str(age))
