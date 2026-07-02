def solution(n):
    temp = ""

    while n:
        div, mod = divmod(n, 3)
        temp += str(mod)
        n = div

    return int(temp, 3)
