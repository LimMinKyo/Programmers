## 다른 풀이(BFS, 너비 우선 탐색)

```js
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(elem) {
    this.items.push(elem);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

function searchTree(numbers, target) {
  const queue = new Queue();
  let index = 1;
  let answer = 0;

  queue.enqueue([numbers[0], -numbers[0]]);

  while (!queue.isEmpty()) {
    const list = queue.dequeue();

    if (index !== numbers.length) {
      const newList = [];

      list.forEach((num) => {
        newList.push(num + numbers[index]);
        newList.push(num - numbers[index]);
      });

      queue.enqueue(newList);
      index++;
      continue;
    }

    list.forEach((num) => {
      if (num === target) {
        answer++;
      }
    });
  }

  return answer;
}

function solution(numbers, target) {
  const answer = searchTree(numbers, target);

  return answer;
}
```
