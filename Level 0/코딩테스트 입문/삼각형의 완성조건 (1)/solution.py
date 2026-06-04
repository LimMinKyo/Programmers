def solution(sides):
    side1, side2, side3 = sorted(sides)
    return 1 if side1 + side2 > side3 else 2
