def solution(num_list):
    odd = int("".join([str(n) for n in num_list if n % 2]))
    even = int("".join([str(n) for n in num_list if not n % 2]))
    return odd + even
