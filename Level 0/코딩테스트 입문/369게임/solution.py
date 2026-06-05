def solution(order):
    return sum(1 for num in str(order) if num in "369")
