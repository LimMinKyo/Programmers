# import numpy as np
#
#
# def solution(arr1, arr2):
#     return (np.matrix(arr1) * np.matrix(arr2)).tolist()


def solution(arr1, arr2):
    return [
        [sum(row * col for row, col in zip(row, col)) for col in zip(*arr2)]
        for row in arr1
    ]
