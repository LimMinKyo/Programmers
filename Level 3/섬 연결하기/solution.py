def find(parent, i):
    if parent[i] == i:
        return i

    parent[i] = find(parent, parent[i])
    return parent[i]


def union(x, y, parent, rank):
    x_root = find(parent, x)
    y_root = find(parent, y)

    if rank[x_root] > rank[y_root]:
        parent[y_root] = x_root
    elif rank[x_root] < rank[y_root]:
        parent[x_root] = y_root
    else:
        parent[y_root] = x_root
        rank[x_root] += 1


def solution(n, costs):
    costs.sort(key=lambda x: x[2])
    parent = [i for i in range(n)]
    rank = [0] * n
    min_cost = 0
    lines = 0

    for start, end, cost in costs:
        if lines == n - 1:
            break

        x = find(parent, start)
        y = find(parent, end)

        if x != y:
            union(x, y, parent, rank)
            min_cost += cost
            lines += 1

    return min_cost
