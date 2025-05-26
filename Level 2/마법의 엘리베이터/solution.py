def solution(storey):
    count = 0

    while storey:
        rest = storey % 10
        storey //= 10

        if rest < 5 or (rest == 5 and storey % 10 < 5):
            count += rest
        else:
            count += 10 - rest
            storey += 1

    return count
