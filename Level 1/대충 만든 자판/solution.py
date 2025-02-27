def solution(keymaps, targets):
    answer = []
    key_dict = {}

    for keymap in keymaps:
        for index, key in enumerate(keymap):
            key_dict[key] = (
                min(key_dict[key], index + 1) if key in key_dict else index + 1
            )

    for target in targets:
        count = 0
        for char in target:
            if char not in key_dict:
                count = -1
                break
            count += key_dict[char]
        answer.append(count)

    return answer
