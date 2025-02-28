def solution(board, h, w):
    dw, dh = [0, 1, 0, -1], [1, 0, -1, 0]
    n = len(board)

    count = 0

    for i in range(4):
        nw, nh = w + dw[i], h + dh[i]

        if 0 <= nw < n and 0 <= nh < n and board[nh][nw] == board[h][w]:
            count += 1

    return count
