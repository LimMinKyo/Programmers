def solution(n, w, num):
    height = n // w
    box_map = []

    for i in range(height + 1):
        row = [j + (w * i) for j in range(1, w + 1)]
        box_map.append(row if i % 2 == 0 else row[::-1])

    floor = num // w - 1 if num % w == 0 else num // w
    row_index = box_map[floor].index(num)

    answer = 1

    while floor < height:
        floor += 1
        if box_map[floor][row_index] <= n:
            answer += 1

    return answer
