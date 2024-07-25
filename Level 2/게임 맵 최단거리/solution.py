from collections import deque


def solution(maps):
    moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    n = len(maps)
    m = len(maps[0])

    queue = deque([(0, 0, 1)])
    maps[0][0] = 0

    while queue:
        x, y, distance = queue.popleft()

        if x == m - 1 and y == n - 1:
            return distance

        for move in moves:
            dx, dy = move
            nx, ny = x + dx, y + dy

            if 0 <= nx < m and 0 <= ny < n and maps[ny][nx] != 0:
                maps[ny][nx] = 0
                queue.append((nx, ny, distance + 1))

    return -1
