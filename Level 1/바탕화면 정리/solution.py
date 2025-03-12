def solution(wallpaper):
    x_arr = []
    y_arr = []

    for y in range(len(wallpaper)):
        for x in range(len(wallpaper[0])):
            if wallpaper[y][x] == "#":
                x_arr.append(x)
                y_arr.append(y)

    return [min(y_arr), min(x_arr), max(y_arr) + 1, max(x_arr) + 1]
