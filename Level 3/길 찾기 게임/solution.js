class Node {
  constructor(info, num, left = null, right = null) {
    this.info = info;
    this.num = num;
    this.left = left;
    this.right = right;
  }

  hasLeft() {
    return Boolean(this.left);
  }

  hasRight() {
    return Boolean(this.right);
  }
}

function solution(nodeinfo) {
  const answer = [[], []];

  const root = buildTree(nodeinfo);
  preOrder(root, answer);
  postOrder(root, answer);

  return answer;
}

function buildTree(nodeinfo) {
  const nodes = Array.from(
    { length: nodeinfo.length },
    (_, index) => new Node(nodeinfo[index], index + 1)
  );
  nodes.sort((a, b) =>
    a.info[1] !== b.info[1] ? b.info[1] - a.info[1] : a.info[0] - b.info[0]
  );
  let root = null;

  nodes.forEach((node) => {
    if (!root) {
      root = node;
      return;
    }

    let parent = root;
    while (true) {
      if (node.info[0] < parent.info[0]) {
        if (parent.hasLeft()) {
          parent = parent.left;
          continue;
        }
        parent.left = node;
        break;
      } else {
        if (parent.hasRight()) {
          parent = parent.right;
          continue;
        }
        parent.right = node;
        break;
      }
    }
  });

  return root;
}

function preOrder(root, answer) {
  if (!root) return;
  answer[0].push(root.num);
  preOrder(root.left, answer);
  preOrder(root.right, answer);
}

function postOrder(root, answer) {
  if (!root) return;
  postOrder(root.left, answer);
  postOrder(root.right, answer);
  answer[1].push(root.num);
}
