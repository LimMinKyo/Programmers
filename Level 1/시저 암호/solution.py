def solution(s, n):
    return "".join(
        [
            (
                chr((ord(char) - ord("a") + n) % 26 + ord("a"))
                if char.islower()
                else (
                    chr((ord(char) - ord("A") + n) % 26 + ord("A"))
                    if char.isupper()
                    else char
                )
            )
            for char in s
        ]
    )
