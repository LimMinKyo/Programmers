from collections import deque


def build_tree(edges):
    tree = {}

    for start, end in edges:
        if not start in tree:
            tree[start] = []
        if not end in tree:
            tree[end] = []
        tree[start].append(end)
        tree[end].append(start)

    return tree


def bfs(tree, start):
    result = []
    visited = set([start])
    queue = deque()
    queue.append((start, 0))

    while queue:
        cur, distance = queue.popleft()
        result.append((cur, distance))

        for node in tree[cur]:
            if not node in visited:
                queue.append((node, distance + 1))
                visited.add(node)

    return result


def solution(n, edges):
    tree = build_tree(edges)

    leaf = bfs(tree, 1)
    father = bfs(tree, leaf[-1][0])

    return father[-1][1] if leaf[-1][1] == leaf[-2][1] else father[-2][1]
