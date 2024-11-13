def solution(sides):
    long_side = max(sides)
    other_side = min(sides)
    diff = long_side - other_side

    first_cases = long_side - diff
    second_cases = sum(sides) - (long_side + 1)

    return first_cases + second_cases
