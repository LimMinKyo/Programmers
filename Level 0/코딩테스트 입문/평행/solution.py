def inclination(a, b):
    x1, y1 = a
    x2, y2 = b
    return (y2 - y1) / (x2 - x1)


def get_is_parrarel(a, b, c, d):
    return inclination(a, b) == inclination(c, d)


def solution(dots):
    a, b, c, d = dots

    case1 = get_is_parrarel(a, b, c, d)
    case2 = get_is_parrarel(a, c, b, d)
    case3 = get_is_parrarel(a, d, b, c)

    return 1 if True in [case1, case2, case3] else 0
