def check_is_valid_move(x, y):
    return -5 <= x <= 5 and -5 <= y <= 5


def move(x, y, dir):
    if dir == "U":
        return [x, y + 1]
    elif dir == "L":
        return [x - 1, y]
    elif dir == "R":
        return [x + 1, y]
    elif dir == "D":
        return [x, y - 1]


def solution(dirs):
    location = [0, 0]
    routes = set()

    for dir in dirs:
        x, y = location
        nx, ny = move(x, y, dir)

        if check_is_valid_move(nx, ny):
            routes.add((x, y, nx, ny))
            routes.add((nx, ny, x, y))
            location = [nx, ny]

    return len(routes) / 2
