def solution(d, budget):
    d.sort()

    answer = 0

    for department in d:
        if department <= budget:
            budget -= department
            answer += 1
        else:
            return answer

    return answer
