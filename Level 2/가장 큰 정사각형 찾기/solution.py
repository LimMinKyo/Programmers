def solution(board):
    ROW, COL = len(board[0]), len(board)

    for i in range(1, COL):
        for j in range(1, ROW):
            if board[i][j] == 1:
                up, left, up_left = (
                    board[i - 1][j],
                    board[i][j - 1],
                    board[i - 1][j - 1],
                )

                board[i][j] = min(up, left, up_left) + 1

    max_value = max(max(row) for row in board)

    return max_value**2
