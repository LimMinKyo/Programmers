def solution(surveys, choices):
    choice_map = {"R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0}

    for survey, choice in zip(surveys, choices):
        if choice < 4:
            choice_map[survey[0]] += abs(choice - 4)
        elif choice > 4:
            choice_map[survey[1]] += abs(choice - 4)

    answer = ""

    for personality in ["RT", "CF", "JM", "AN"]:
        if choice_map[personality[0]] > choice_map[personality[1]]:
            answer += personality[0]
        elif choice_map[personality[0]] < choice_map[personality[1]]:
            answer += personality[1]
        else:
            answer += sorted(personality)[0]

    return answer
