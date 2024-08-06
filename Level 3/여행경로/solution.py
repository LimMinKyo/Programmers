from collections import defaultdict


def build_graph(tickets):
    graph = defaultdict(list)

    for start, end in tickets:
        graph[start].append(end)

    for key in graph.keys():
        graph[key].sort()

    return graph


def dfs(start, path, graph, N):
    if len(path) == N:
        return path

    for index, end in enumerate(graph[start]):
        graph[start].pop(index)

        new_path = path[:] + [end]

        result = dfs(end, new_path, graph, N)

        graph[start].insert(index, end)

        if result:
            return result


def solution(tickets):
    graph = build_graph(tickets)
    N = len(tickets) + 1

    answer = dfs("ICN", ["ICN"], graph, N)

    return answer
