def solution(strArr):
    return [
        str.upper() if index % 2 else str.lower() for index, str in enumerate(strArr)
    ]
