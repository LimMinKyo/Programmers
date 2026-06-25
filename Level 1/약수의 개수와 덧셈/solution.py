def solution(left, right):
    # 약수의 개수가 홀수인 수는 제곱수이므로, 제곱수이면 음수로 바꾸고, 아니면 그대로 더한다.
    return sum(n if n**0.5 % 1 else -n for n in range(left, right + 1))
