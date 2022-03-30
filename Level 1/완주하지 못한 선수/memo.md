## 풀이
`participant(참가자)` 배열과 `completion(완주자)` 배열 모두 `sort()`를 이용해서 정렬시키자. <br>
그리고 인덱스 0부터 두 배열을 비교하면 for문 한 번으로 문제를 해결할 수 있다. <br>
`participant(참가자)` 배열과 `completion(완주자)` 배열을 0번 부터 비교하다보면 <br>
`participant(참가자)` 배열에 `비완주자(정답)`가 나올 경우 두 배열 비교 연산은 불일치가 나올 것이고 <br>
그 때 `participant(참가자)` 배열의 요소를 출력하면 된다.

## 코드

```js
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
```

___

- 출처: https://wooder2050.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%84%A0%EC%88%98-javascript-2ecb52443e8d