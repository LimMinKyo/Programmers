def solution(babbling):
    answer = 0

    for babbling_word in babbling:
        for can_speak_word in ["aya", "ye", "woo", "ma"]:
            if can_speak_word * 2 not in babbling_word:
                babbling_word = babbling_word.replace(can_speak_word, " ")

        if not babbling_word.strip():
            answer += 1

    return answer
