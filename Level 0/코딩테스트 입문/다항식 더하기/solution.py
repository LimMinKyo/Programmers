def solution(polynomial):
    x_num = 0
    num = 0

    for n in polynomial.split(" + "):
        if "x" in n:
            x_num += int(n.replace("x", "") or 1)
        else:
            num += int(n)

    answer = []

    if x_num:
        answer.append(f"{x_num if x_num != 1 else ''}x")

    if num:
        answer.append(str(num))

    return " + ".join(answer)
