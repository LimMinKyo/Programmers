def solution(n):
    sqrt = n**0.5
    return (sqrt + 1) ** 2 if sqrt % 1 == 0 else -1
