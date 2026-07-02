def solution(s):
    return " ".join(
        "".join(
            char.upper() if index % 2 == 0 else char.lower()
            for index, char in enumerate(word)
        )
        for word in s.split(" ")
    )
