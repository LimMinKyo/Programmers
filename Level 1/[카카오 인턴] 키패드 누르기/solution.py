def solution(numbers, hand):
    keypad = {
        1: (0, 0),
        2: (0, 1),
        3: (0, 2),
        4: (1, 0),
        5: (1, 1),
        6: (1, 2),
        7: (2, 0),
        8: (2, 1),
        9: (2, 2),
        "*": (3, 0),
        0: (3, 1),
        "#": (3, 2),
    }

    left = "*"
    right = "#"

    answer = ""

    for num in numbers:
        if num in [1, 4, 7]:
            left = num
            answer += "L"
        elif num in [3, 6, 9]:
            right = num
            answer += "R"
        else:
            left_distance = abs(keypad[num][0] - keypad[left][0]) + abs(
                keypad[num][1] - keypad[left][1]
            )
            right_distance = abs(keypad[num][0] - keypad[right][0]) + abs(
                keypad[num][1] - keypad[right][1]
            )
            if left_distance == right_distance:
                if hand == "right":
                    right = num
                    answer += "R"
                else:
                    left = num
                    answer += "L"
            elif left_distance < right_distance:
                left = num
                answer += "L"
            else:
                right = num
                answer += "R"

    return answer
