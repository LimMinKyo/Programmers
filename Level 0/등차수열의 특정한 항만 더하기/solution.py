def solution(a, d, included):
    return sum(a + d * index for index, isInclude in enumerate(included) if isInclude)
