def solution(n, stations, w):
    answer = 0
    location = 1
    idx = 0

    while location <= n:
        if idx < len(stations) and location >= stations[idx] - w:
            location = stations[idx] + w + 1
            idx += 1
        else:
            location += w * 2 + 1
            answer += 1

    return answer
