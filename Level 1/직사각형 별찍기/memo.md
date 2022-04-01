## 풀이 및 코드

```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]);
  const b = Number(n[1]);

  // repeat 메서드를 이용하여 한 줄에 출력할 별(*)의 개수를 저장한다.
  // 그리고 마지막에는 개행 문자(\n)를 이용하여 한 줄씩 출력할 때 마다 줄바꿈을 해줄 수 있도록 한다.
  const row = '*'.repeat(a) + '\n';
  // 그리고 줄의 개수만큼 repeat 메서드를 이용하여 출력한다.
  console.log(row.repeat(b));
});
```
