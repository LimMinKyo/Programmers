import heapq


def dijkstra(start, n, graph):
    queue = [(0, start)]
    distances = [float("inf") for _ in range(n + 1)]
    distances[start] = 0

    while queue:
        cost, node = heapq.heappop(queue)

        for next_node, next_cost in graph[node]:
            new_cost = cost + next_cost

            if distances[next_node] > new_cost:
                distances[next_node] = new_cost
                heapq.heappush(queue, (new_cost, next_node))

    return distances


def solution(n, s, a, b, fares):
    graph = [[] for _ in range(n + 1)]

    for start, end, cost in fares:
        graph[start].append((end, cost))
        graph[end].append((start, cost))

    distances_from_a = dijkstra(a, n, graph)
    distances_from_b = dijkstra(b, n, graph)
    distances_from_s = dijkstra(s, n, graph)

    answer = float("inf")

    for i in range(1, n + 1):
        answer = min(
            answer, distances_from_s[i] + distances_from_a[i] + distances_from_b[i]
        )

    return answer
