def solution(my_string):
    num1, operator, num2 = my_string.split(" ")
    return int(num1) + int(num2) if operator == "+" else int(num1) - int(num2)
