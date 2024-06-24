from collections import deque


def is_valid_move(nx, ny, x_length, y_length, maps):
    return 0 <= nx < x_length and 0 <= ny < y_length and maps[nx][ny] != "X"


def append_queue(nx, ny, k, time, visited, queue):
    if not visited[nx][ny][k]:
        visited[nx][ny][k] = True
        queue.append((nx, ny, k, time))


def solution(maps):
    n, m = len(maps), len(maps[0])

    visited = [[[False for _ in range(2)] for _ in range(m)] for _ in range(n)]
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    end_x, end_y = -1, -1
    queue = deque()

    for x in range(n):
        for y in range(m):
            if maps[x][y] == "S":
                queue.append((x, y, 0, 0))
                visited[x][y][0] = True
            if maps[x][y] == "E":
                end_x, end_y = x, y

    while queue:
        x, y, k, time = queue.popleft()

        if x == end_x and y == end_y and k == 1:
            return time

        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]

            if not is_valid_move(nx, ny, n, m, maps):
                continue

            if maps[nx][ny] == "L":
                append_queue(nx, ny, 1, time + 1, visited, queue)
            else:
                append_queue(nx, ny, k, time + 1, visited, queue)

    return -1
