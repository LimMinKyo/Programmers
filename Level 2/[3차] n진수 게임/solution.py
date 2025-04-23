def solution(n, t, m, p):
    string = ""
    num = 0

    while len(string) < m * t:
        string += convert(num, n)
        num += 1

    return string[p - 1 :: m][:t]


def convert(num, n):
    temp = "0123456789ABCDEF"
    div, mod = divmod(num, n)

    if div == 0:
        return temp[mod]
    else:
        return convert(div, n) + temp[mod]
