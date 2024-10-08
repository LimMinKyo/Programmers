from heapq import heappush, heappop


def solution(land, height):
    n = len(land)
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    visited = [[False for _ in range(n)] for _ in range(n)]
    queue = []
    heappush(queue, [0, 0, 0])

    answer = 0

    while queue:
        cost, x, y = heappop(queue)

        if not visited[y][x]:
            answer += cost
            visited[y][x] = True

            for d in range(4):
                nx, ny = x + dx[d], y + dy[d]

                if 0 <= nx < n and 0 <= ny < n:
                    new_cost = abs(land[ny][nx] - land[y][x])
                    heappush(queue, [new_cost if new_cost > height else 0, nx, ny])

    return answer
