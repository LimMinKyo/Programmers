def solution(common):
    return (
        common[-1] + (common[1] - common[0])
        if common[2] - common[1] == common[1] - common[0]
        else common[-1] * ((common[2] - common[1]) / (common[1] - common[0]))
    )
