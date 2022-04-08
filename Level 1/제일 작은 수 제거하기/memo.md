## 풀이 및 코드

```js
function solution(arr) {
  const answer =
  // arr.length가 1이면 [-1]을 answer 변수에 저장한다.
  // 아니라면 filter 메서드와 Math.min 메서드를 이용해 가장 작은 수를 제외한 배열을 answer 변수에 저장한다.
    arr.length === 1 ? [-1] : arr.filter((item) => item !== Math.min(...arr));
  return answer;
}
```
