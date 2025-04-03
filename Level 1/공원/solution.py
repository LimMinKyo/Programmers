def solution(mats, park):
    width, height = len(park[0]), len(park)
    mats.sort(reverse=True)

    def is_can_place(row, column, size):
        if row + size > width or column + size > height:
            return False
        else:
            return all(
                park[i][j] == "-1"
                for j in range(row, row + size)
                for i in range(column, column + size)
            )

    for size in mats:
        for i in range(height - size + 1):
            for j in range(width - size + 1):
                if is_can_place(j, i, size):
                    return size

    return -1
