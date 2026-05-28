def solution(hp):
    answer = 0

    for ant in [5, 3, 1]:
        div, mod = divmod(hp, ant)
        hp = mod
        answer += div

    return answer
