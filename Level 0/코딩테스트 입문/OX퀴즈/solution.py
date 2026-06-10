def solution(quiz):
    return ["O" if eval(question.replace("=", "==")) else "X" for question in quiz]
