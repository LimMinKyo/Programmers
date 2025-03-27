def solution(park, routes):
    robot_dog = []

    width, height = len(park[0]), len(park)
    direction_map = {"N": (0, -1), "W": (-1, 0), "S": (0, 1), "E": (1, 0)}

    for y, row in enumerate(park):
        for x, coord in enumerate(row):
            if coord == "S":
                robot_dog = [x, y]

    for route in routes:
        direction, distance = route.split(" ")
        x, y = robot_dog
        dx, dy = direction_map[direction]
        nx, ny = 0, 0
        is_valid_route = True

        for i in range(1, int(distance) + 1):
            nx, ny = x + (dx * i), y + (dy * i)

            if 0 <= nx < width and 0 <= ny < height and park[ny][nx] != "X":
                continue
            else:
                is_valid_route = False
                break

        if is_valid_route:
            robot_dog = [nx, ny]

    return robot_dog[::-1]
