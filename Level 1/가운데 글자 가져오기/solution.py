def solution(s):
    n = len(s)
    half = n // 2
    return s[half - 1 : half + 1] if n % 2 == 0 else s[half]
