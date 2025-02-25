def solution(s, skip, index):
    alphabets = [
        alphabet for alphabet in "abcdefghijklmnopqrstuvwxyz" if alphabet not in skip
    ]

    return "".join(
        alphabets[(alphabets.index(char) + index) % len(alphabets)] for char in s
    )
