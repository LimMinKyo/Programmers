function solution(land, height) {
  const n = land.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const queue = new MinHeap();
  queue.push([0, 0, 0]);

  let answer = 0;

  while (queue.size()) {
    const [cost, x, y] = queue.pop();

    if (!visited[y][x]) {
      answer += cost;
      visited[y][x] = true;

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
          let newCost = Math.abs(land[ny][nx] - land[y][x]);
          newCost = newCost > height ? newCost : 0;
          queue.push([newCost, nx, ny]);
        }
      }
    }
  }

  return answer;
}

class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex][0] <= this.items[index][0]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;

      if (this.items[index][0] <= this.items[smallerChild][0]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}
