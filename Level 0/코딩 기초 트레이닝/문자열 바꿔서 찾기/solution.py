def solution(myString, pat):
    return int(pat in "".join(["B" if char == "A" else "A" for char in myString]))
