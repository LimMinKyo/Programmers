class Graph:
    def __init__(self, n, wires):
        self.graph = [[] for _ in range(n + 1)]

        for a, b in wires:
            self.graph[a].append(b)
            self.graph[b].append(a)

    def cut_wire(self, a, b):
        self.graph[a].remove(b)
        self.graph[b].remove(a)

    def connect_wire(self, a, b):
        self.graph[a].append(b)
        self.graph[b].append(a)

    def dfs(self, node, parent):
        count = 1

        for child in self.graph[node]:
            if child != parent:
                count += self.dfs(child, node)

        return count


def solution(n, wires):
    graph = Graph(n, wires)

    answer = float("inf")

    for a, b in wires:
        graph.cut_wire(a, b)

        count_a = graph.dfs(a, b)
        count_b = n - count_a

        answer = min(answer, abs(count_a - count_b))

        graph.connect_wire(a, b)

    return answer
