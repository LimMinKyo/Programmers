def solution(picture, k):
    answer = []

    for row in picture:
        for _ in range(k):
            answer.append("".join(pixel * k for pixel in row))

    return answer
