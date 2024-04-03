def solution(N, stages):
    challengers = [0] * (N + 2)

    for stage in stages:
        challengers[stage] += 1

    fails = {}
    total = len(stages)

    for i in range(1, N + 1):
        if challengers[i] == 0:
            fails[i] = 0
        else:
            fails[i] = challengers[i] / total
            total -= challengers[i]

    return sorted(fails, key=lambda stage: fails[stage], reverse=True)
