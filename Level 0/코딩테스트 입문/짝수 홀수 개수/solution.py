def solution(num_list):
    odd, even = 0, 0

    for num in num_list:
        if num % 2:
            even += 1
        else:
            odd += 1

    return [odd, even]
