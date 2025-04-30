def solution(m, n, board):
    board = list(map(list, board))
    answer = 0

    while True:
        count = count_block(m, n, board)
        if count == 0:
            break
        answer += count

    return answer


def count_block(m, n, board):
    count = 0
    check_board = [[0 for _ in range(n)] for _ in range(m)]

    for i in range(m - 1):
        for j in range(n - 1):
            a = board[i][j]
            b = board[i][j + 1]
            c = board[i + 1][j]
            d = board[i + 1][j + 1]
            if a == b == c == d and a != "0":
                (
                    check_board[i][j],
                    check_board[i][j + 1],
                    check_board[i + 1][j],
                    check_board[i + 1][j + 1],
                ) = (1, 1, 1, 1)

    for i in range(m):
        for j in range(n):
            if check_board[i][j] == 1:
                count += 1
                board[i][j] = "0"

    for i in range(m - 2, -1, -1):
        for j in range(n):
            k = i
            while 0 <= k + 1 < m and board[k + 1][j] == "0":
                k += 1
            if k != i:
                board[k][j] = board[i][j]
                board[i][j] = "0"

    return count
