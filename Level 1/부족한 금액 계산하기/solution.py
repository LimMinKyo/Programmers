def solution(price, money, count):
    total = sum(price * n for n in range(1, count + 1))
    return max(total - money, 0)
