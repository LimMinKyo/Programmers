def solution(arrows):
    answer = 0
    x, y = 0, 0
    visited = set([(x, y)])
    routes = set()
    dx, dy = [0, 1, 1, 1, 0, -1, -1, -1], [1, 1, 0, -1, -1, -1, 0, 1]

    for arrow in arrows:
        for _ in range(2):
            nx, ny = x + dx[arrow], y + dy[arrow]

            if (nx, ny) in visited and (x, y, nx, ny) not in routes:
                answer += 1

            routes.add((x, y, nx, ny))
            routes.add((nx, ny, x, y))
            visited.add((nx, ny))
            x, y = nx, ny

    return answer
