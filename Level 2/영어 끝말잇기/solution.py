def solution(n, words):
    used_words = set()
    start_char = words[0][0]

    for index, word in enumerate(words):
        if word in used_words or word[0] != start_char:
            return [index % n + 1, index // n + 1]
        used_words.add(word)
        start_char = word[-1]

    return [0, 0]
