from itertools import chain


def solution(n):
    pyramid = [[0] * (i + 1) for i in range(n)]
    num = sum(len(row) for row in pyramid)
    direction = "down"
    x, y = 0, 0

    for i in range(1, num + 1):
        pyramid[y][x] = i

        if direction == "down":
            if y + 1 < n and pyramid[y + 1][x] == 0:
                y += 1
            else:
                x += 1
                direction = "right"
        elif direction == "right":
            if x + 1 < n and pyramid[y][x + 1] == 0:
                x += 1
            else:
                x -= 1
                y -= 1
                direction = "up"
        elif direction == "up":
            if x - 1 >= 0 and y - 1 >= 0 and pyramid[y - 1][x - 1] == 0:
                x -= 1
                y -= 1
            else:
                y += 1
                direction = "down"

    return list(chain(*pyramid))
