from collections import deque


def is_valid_move(nx, ny, x_length, y_length, maps):
    return 0 <= nx < x_length and 0 <= ny < y_length and maps[ny][nx] != "X"


def append_queue(nx, ny, k, time, visited, queue):
    if not visited[ny][nx][k]:
        visited[ny][nx][k] = True
        queue.append((nx, ny, k, time))


def solution(maps):
    x_length, y_length = len(maps[0]), len(maps)

    visited = [
        [[False for _ in range(2)] for _ in range(x_length)] for _ in range(y_length)
    ]
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    end_x, end_y = -1, -1
    queue = deque()

    for y in range(y_length):
        for x in range(x_length):
            if maps[y][x] == "S":
                queue.append((x, y, 0, 0))
                visited[y][x][0] = True
            if maps[y][x] == "E":
                end_x, end_y = x, y

    while queue:
        x, y, k, time = queue.popleft()

        if x == end_x and y == end_y and k == True:
            return time

        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]

            if not is_valid_move(nx, ny, x_length, y_length, maps):
                continue

            if maps[ny][nx] == "L":
                append_queue(nx, ny, 1, time + 1, visited, queue)
            else:
                append_queue(nx, ny, k, time + 1, visited, queue)

    return -1
