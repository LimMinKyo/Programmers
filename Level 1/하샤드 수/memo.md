## 풀이 및 코드

```js
function solution(x) {
  // x의 각 자릿수를 나누어 배열을 만들어 준다.
  const numArr = x.toString().split('').map((value) => +value);
  // reduce 메서드를 이용해 각 자릿수의 합(sum)을 구해준다.
  const sum = numArr.reduce((a, b) => a + b);
  // x를 각 자릿수의 합(x)으로 나누어 떨어지는 지 확인하여 하샤드 수인지 판별한다.
  return x % sum === 0 ? true : false;
}
```
