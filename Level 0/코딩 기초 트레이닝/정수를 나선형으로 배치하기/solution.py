def solution(n):
    move = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    x, y, m = 0, 0, 0

    answer = [[0 for _ in range(n)] for _ in range(n)]

    for i in range(1, n**2 + 1):
        answer[y][x] = i
        if (
            x + move[m][0] >= n
            or y + move[m][1] >= n
            or answer[y + move[m][1]][x + move[m][0]]
        ):
            m = (m + 1) % len(move)
        x, y = x + move[m][0], y + move[m][1]

    return answer
