class Node:
    live = True

    def __init__(self, prev, next, n):
        self.prev = prev if prev >= 0 else None
        self.next = next if next < n else None


def solution(n, k, cmd_list):
    table = {i: Node(i - 1, i + 1, n) for i in range(n)}

    now = k

    stack = []

    for cmd in cmd_list:
        if cmd[0] == "C":
            stack.append(now)
            table[now].live = False

            prev, next = table[now].prev, table[now].next

            if prev is not None:
                table[prev].next = next
            if next is not None:
                table[next].prev = prev

            now = prev if next is None else next

        elif cmd[0] == "Z":
            restore = stack.pop()

            table[restore].live = True
            prev, next = table[restore].prev, table[restore].next

            if prev is not None:
                table[prev].next = restore
            if next is not None:
                table[next].prev = restore

        else:
            direction, count = cmd.split(" ")
            count = int(count)

            for _ in range(count):
                prev, next = table[now].prev, table[now].next
                now = prev if direction == "U" else next

    return "".join("O" if table[i].live else "X" for i in range(n))
