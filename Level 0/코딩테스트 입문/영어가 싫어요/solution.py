def solution(numbers):
    for num, string in enumerate(
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    ):
        numbers = numbers.replace(string, str(num))

    return int(numbers)
