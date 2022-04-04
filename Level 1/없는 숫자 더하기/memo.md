## 풀이 및 코드

```js
function solution(numbers) {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    // 0부터 9까지의 숫자가 numbers 배열에 없다면 result 배열에 해당 숫자를 추가한다.
    if (numbers.indexOf(i) === -1) {
      result.push(i);
    }
  }
  // reduce 메서드를 이용해 합(sum)을 구해준다.
  const sum = result.reduce((a, b) => a + b);
  return sum;
}
```