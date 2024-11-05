def solution(board, k):
    return sum(
        board[i][j]
        for j in range(len(board[0]))
        for i in range(len(board))
        if i + j <= k
    )
