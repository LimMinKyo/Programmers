import sys

sys.setrecursionlimit(10**6)


class Node:
    def __init__(self, info, num, left=None, right=None):
        self.info = info
        self.num = num
        self.left = left
        self.right = right

    def has_left(self):
        return self.left is not None

    def has_right(self):
        return self.right is not None


def make_BT(nodeinfo):
    nodes = [Node(nodeinfo[i], i + 1) for i in range(len(nodeinfo))]
    nodes.sort(key=lambda x: (x.info[1], -x.info[0]), reverse=True)
    root = None

    for node in nodes:
        if root is None:
            root = node
        else:
            parent = root
            while True:
                if node.info[0] < parent.info[0]:
                    if parent.has_left():
                        parent = parent.left
                        continue
                    parent.left = node
                    break
                else:
                    if parent.has_right():
                        parent = parent.right
                        continue
                    parent.right = node
                    break

    return root


def pre_order(root, answer):
    if root is None:
        return
    answer[0].append(root.num)
    pre_order(root.left, answer)
    pre_order(root.right, answer)


def post_order(root, answer):
    if root is None:
        return
    post_order(root.left, answer)
    post_order(root.right, answer)
    answer[1].append(root.num)


def solution(nodeinfo):
    answer = [[], []]

    root = make_BT(nodeinfo)
    pre_order(root, answer)
    post_order(root, answer)

    return answer
