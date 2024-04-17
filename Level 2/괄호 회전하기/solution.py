closeBraketMap = {"}": "{", "]": "[", ")": "("}


def solution(s):
    answer = 0

    for i in range(len(s)):
        rotatedS = s[i:] + s[:i]

        stack = []

        for braket in rotatedS:
            if braket in ("{", "[", "("):
                stack.append(braket)
            else:
                if stack and stack[-1] == closeBraketMap[braket]:
                    stack.pop()
                else:
                    break
        else:
            if not stack:
                answer += 1

    return answer
