def solution(foods):
    order = "".join(str(i) * (foods[i] // 2) for i in range(1, len(foods)))
    return order + "0" + order[::-1]
