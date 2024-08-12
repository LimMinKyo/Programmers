import heapq


def build_graph(N, road):
    graph = [[] for _ in range(N + 1)]

    for a, b, cost in road:
        graph[a].append((b, cost))
        graph[b].append((a, cost))

    return graph


def solution(N, road, K):
    graph = build_graph(N, road)
    distances = [float("inf")] * (N + 1)
    distances[1] = 0

    queue = [(1, 0)]

    while queue:
        node, node_cost = heapq.heappop(queue)

        for next_node, next_node_cost in graph[node]:
            cost = node_cost + next_node_cost

            if cost < distances[next_node]:
                distances[next_node] = cost
                heapq.heappush(queue, (next_node, cost))

    return sum(1 for distance in distances if distance <= K)
