def solution(numbers):
    return [(((number ^ (number + 1)) >> 2) + number + 1) for number in numbers]
