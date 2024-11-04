def solution(arr):
    rows, cols = (
        len(arr),
        len(arr[0]),
    )
    diff = abs(rows - cols)

    if rows > cols:
        for index in range(rows):
            for _ in range(diff):
                arr[index].append(0)
    elif rows < cols:
        for _ in range(diff):
            arr.append([0] * cols)

    return arr
