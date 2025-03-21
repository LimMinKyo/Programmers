def solution(keyinputs, board):
    keyinput_map = {"left": (-1, 0), "right": (1, 0), "up": (0, 1), "down": (0, -1)}

    width, height = board
    half_width = width // 2
    half_height = height // 2

    character = [0, 0]

    for keyinput in keyinputs:
        x, y = character
        dx, dy = keyinput_map[keyinput]
        nx, ny = x + dx, y + dy

        if -half_width <= nx <= half_width and -half_height <= ny <= half_height:
            character = [nx, ny]

    return character
