import heapq


def solution(n, s, a, b, fares):
    graph = [[] for _ in range(n + 1)]

    for start, end, cost in fares:
        graph[start].append((end, cost))
        graph[end].append((start, cost))

    def dijkstra(start):
        queue = [(0, start)]
        costs = [float("inf") for _ in range(n + 1)]
        costs[start] = 0

        while queue:
            cost, node = heapq.heappop(queue)

            for next_node, next_cost in graph[node]:
                new_cost = cost + next_cost

                if costs[next_node] > new_cost:
                    costs[next_node] = new_cost
                    heapq.heappush(queue, (new_cost, next_node))

        return costs

    answer = float("inf")
    D = [0] + [dijkstra(i) for i in range(1, n + 1)]

    for i in range(1, n + 1):
        answer = min(answer, D[s][i] + D[i][a] + D[i][b])

    return answer
