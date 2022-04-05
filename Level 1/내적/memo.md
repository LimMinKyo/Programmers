## 풀이 및 코드

```js
function solution(a, b) {
  let answer = 0;

  // a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 이다.
  // 이를 for 문을 이용하여 아래와 같이 구현할 수 있다.
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}
```