## 풀이 및 코드

```js
function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    const [i, j, k] = command;
    // slice 메서드를 이용해 i번째 부터 j번째까지 숫자를 자르고 sort 메서드를 이용해서 오름차순으로 정렬한다.
    const newArr = array.slice(i - 1, j).sort((a, b) => a - b);
    // push 메서드를 이용해 k번째수를 answer 배열에 담아준다.
    answer.push(newArr[k - 1]);
  });
  return answer;
}
```