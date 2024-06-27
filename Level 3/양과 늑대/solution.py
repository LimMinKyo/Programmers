from collections import deque


def build_tree(info, edges):
    tree = [[] for _ in range(len(info))]

    for start, end in edges:
        tree[start].append(end)

    return tree


def solution(info, edges):
    tree = build_tree(info, edges)

    queue = deque([(0, 1, 0, set())])

    max_sheep = 0

    while queue:
        current, sheep_count, wolf_count, visited = queue.popleft()

        max_sheep = max(max_sheep, sheep_count)

        visited.update(tree[current])

        for next_node in visited:
            is_wolf = info[next_node]

            if not is_wolf:
                queue.append(
                    (next_node, sheep_count + 1, wolf_count, visited - {next_node})
                )
            elif is_wolf and sheep_count != wolf_count + 1:
                queue.append(
                    (next_node, sheep_count, wolf_count + 1, visited - {next_node})
                )

    return max_sheep
