## 다른 풀이

```js
const solution = (citations) =>
  citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
```

## 출처

- https://school.programmers.co.kr/learn/courses/30/lessons/42747/solution_groups?language=javascript
