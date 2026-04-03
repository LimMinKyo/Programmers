def solution(s):
    if s[0] == ")":
        return False

    stack = []

    for bracket in s:
        if bracket == "(":
            stack.append(bracket)
        else:
            if not len(stack):
                return False
            else:
                stack.pop()

    return False if stack else True
