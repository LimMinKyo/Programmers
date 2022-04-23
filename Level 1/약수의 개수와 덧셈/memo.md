## 풀이 및 코드

```js
function solution(left, right) {
  // 계산의 결과를 담은 answer 변수 선언
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // i의 약수들을 저장할 배열 선언
    const divisor = [];

    for (let j = 1; j <= i; j++) {
      // i가 j로 나누어 떨어지면 j는 약수이므로 divisor 배열에 넣어준다.
      if (i % j === 0) divisor.push(j);
    }
    
    // 약수의 개수가 짝수이면 더하고 홀수이면 뺀다.
    divisor.length % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}
```
