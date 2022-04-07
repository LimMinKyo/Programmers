## 풀이 및 코드

```js
function solution(phone_number) {
  // split 메서드를 이용하여 핸드폰 번호를 한자리씩 나누어 배열을 만들어 준다.
  let phoneNumberArray = phone_number.split('');

  // for문을 이용하여 뒤에서 4번째 자리 전까지의 숫자를 모두 '*'로 바꾸어 준다.
  for (let i = 0; i < phone_number.length - 4; i++) {
    phoneNumberArray[i] = '*';
  }

  // join 메서드를 이용해 배열을 문자열로 바꾸어 준다.
  return phoneNumberArray.join('');
}
```