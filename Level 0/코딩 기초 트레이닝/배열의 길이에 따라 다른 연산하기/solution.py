def solution(arr, n):
    return [
        num + n if len(arr) % 2 != index % 2 else num for index, num in enumerate(arr)
    ]
