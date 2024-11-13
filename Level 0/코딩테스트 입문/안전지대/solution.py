import itertools


def solution(board):
    n = len(board)
    board_map = [[0] * n for _ in range(n)]
    directions = [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
    ]

    for x in range(n):
        for y in range(n):
            if board[x][y] == 1:
                board_map[x][y] = 1
                for dx, dy in directions:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < n and 0 <= ny < n:
                        board_map[nx][ny] = 1

    return len([value for value in itertools.chain(*board_map) if value == 0])
