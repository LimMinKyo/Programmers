def solution(my_strings, parts):
    return "".join(
        [word[start : end + 1] for word, (start, end) in zip(my_strings, parts)]
    )
