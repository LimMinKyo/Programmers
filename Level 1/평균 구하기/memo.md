## 풀이 및 코드

```js
function solution(arr) {
  // reduce 메서드를 이용해 배열 안 요소들의 값의 합(sum)을 구해준다.
  const sum = arr.reduce((a, b) => a + b);
  // 구한 합(sum)을 배열 요소의 개수로 나누어 평균(average)를 구해준다.
  const average = sum / arr.length;
  return average;
}
```