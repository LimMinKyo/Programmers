class MinHeap {
  heap = [];

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }

    return min;
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (this.heap[currentIndex] < this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  bubbleDown(index = 0) {
    let currentIndex = index;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);
    let nextIndex = currentIndex;

    if (this.heap[nextIndex] > this.heap[leftChildIndex]) {
      nextIndex = leftChildIndex;
    }

    if (this.heap[nextIndex] > this.heap[rightChildIndex]) {
      nextIndex = rightChildIndex;
    }

    if (nextIndex !== currentIndex) {
      this.swap(nextIndex, currentIndex);
      this.bubbleDown(nextIndex);
    }
  }
}

function solution(scoville, K) {
  let answer = 0;
  const heap = new MinHeap();

  scoville.forEach((value) => heap.push(value));

  while (heap.peek() < K) {
    const firstScoville = heap.pop();
    const secondScoville = heap.pop();
    const mixedScoville = firstScoville + secondScoville * 2;

    heap.push(mixedScoville);
    answer++;
  }

  return heap.peek() >= K ? answer : -1;
}
