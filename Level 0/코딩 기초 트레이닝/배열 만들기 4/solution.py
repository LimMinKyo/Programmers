def solution(arr):
    stack = []
    i = 0

    while i < len(arr):
        if not stack:
            stack.append(arr[i])
            i += 1
            continue

        if stack[-1] < arr[i]:
            stack.append(arr[i])
            i += 1
        else:
            stack.pop()

    return stack
