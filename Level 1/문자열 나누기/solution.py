def solution(s):
    first_char = ""
    same_count = 0
    diff_count = 0

    answer = 0

    for char in s:
        if not first_char:
            first_char = char
            same_count += 1
            answer += 1
            continue

        if char == first_char:
            same_count += 1
        else:
            diff_count += 1

        if same_count == diff_count:
            first_char = ""
            same_count = 0
            diff_count = 0

    return answer
