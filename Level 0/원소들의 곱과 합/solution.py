from math import prod


def solution(num_list):
    list_mul = prod(num_list)
    list_sum = sum(num_list)
    return int(list_mul < list_sum**2)
