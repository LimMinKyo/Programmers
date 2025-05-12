def solution(arr):
    answer = [0, 0]

    quadtree(0, 0, len(arr), arr, answer)

    return answer


def quadtree(x, y, n, arr, answer):
    for i in range(x, x + n):
        for j in range(y, y + n):
            if arr[x][y] != arr[i][j]:
                n //= 2
                quadtree(x, y, n, arr, answer)
                quadtree(x + n, y, n, arr, answer)
                quadtree(x, y + n, n, arr, answer)
                quadtree(x + n, y + n, n, arr, answer)
                return

    answer[arr[x][y]] += 1
