def get_answer(n, y, width, diagonal1, diagonal2):
    answer = 0

    if y == n:
        answer += 1
    else:
        for i in range(n):
            if width[i] or diagonal1[i + y] or diagonal2[i - y + n]:
                continue
            width[i] = diagonal1[i + y] = diagonal2[i - y + n] = True
            answer += get_answer(n, y + 1, width, diagonal1, diagonal2)
            width[i] = diagonal1[i + y] = diagonal2[i - y + n] = False

    return answer


def solution(n):
    answer = get_answer(n, 0, [False] * n, [False] * (n * 2), [False] * (n * 2))
    return answer
