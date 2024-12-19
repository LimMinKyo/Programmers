def solution(lines):
    line = [0] * 200

    for a, b in lines:
        for i in range(a, b):
            line[i + 100] += 1

    return sum([1 for i in line if i > 1])
