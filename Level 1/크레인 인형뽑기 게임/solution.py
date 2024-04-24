def solution(board, moves):
    lanes = [[] for _ in range(len(board[0]))]

    for row in board[::-1]:
        for index, doll in enumerate(row):
            if doll:
                lanes[index].append(doll)

    bucket = []
    answer = 0

    for move in moves:
        lane = lanes[move - 1]

        if not lane:
            continue

        doll = lane.pop()

        if bucket and bucket[-1] == doll:
            bucket.pop()
            answer += 2
        else:
            bucket.append(doll)

    return answer
