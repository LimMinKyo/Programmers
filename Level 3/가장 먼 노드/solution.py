from collections import deque


def build_graph(n, edge):
    graph = [[] for _ in range(n + 1)]

    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)

    return graph


def solution(n, edge):
    graph = build_graph(n, edge)

    queue = deque([(1, 0)])
    distances = [0 for _ in range(n + 1)]
    visited = [False for _ in range(n + 1)]
    visited[1] = True

    while queue:
        node, distance = queue.popleft()
        distances[node] = distance

        for next_node in graph[node]:
            if not visited[next_node]:
                queue.append((next_node, distance + 1))
                visited[next_node] = True

    return distances.count(max(distances))
