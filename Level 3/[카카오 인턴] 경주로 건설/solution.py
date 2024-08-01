from collections import deque


def is_valid(x, y, N):
    return 0 <= x < N and 0 <= y < N


def is_blocked(x, y, N, board):
    return (x, y) == (0, 0) or not is_valid(x, y, N) or board[x][y] == 1


def calculate_cost(direction, prev_direction, cost):
    if prev_direction == -1 or prev_direction == direction:
        return cost + 100
    else:
        return cost + 600


def is_should_update(x, y, direction, new_cost, visited):
    return visited[x][y][direction] == 0 or visited[x][y][direction] > new_cost


def solution(board):
    N = len(board)
    directions = [(0, -1), (-1, 0), (0, 1), (1, 0)]
    visited = [[[0 for _ in range(len(directions))] for _ in range(N)] for _ in range(N)]
    queue = deque([(0, 0, -1, 0)])

    answer = float("inf")

    while queue:
        x, y, prev_direction, cost = queue.popleft()

        for direction, (dx, dy) in enumerate(directions):
            nx, ny = x + dx, y + dy

            if is_blocked(nx, ny, N, board):
                continue

            new_cost = calculate_cost(direction, prev_direction, cost)

            if (nx, ny) == (N - 1, N - 1):
                answer = min(answer, new_cost)
            elif is_should_update(nx, ny, direction, new_cost, visited):
                queue.append((nx, ny, direction, new_cost))
                visited[nx][ny][direction] = new_cost

    return answer
