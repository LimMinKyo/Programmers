def solution(orders):
    return sum(5000 if "cafelatte" in order else 4500 for order in orders)
