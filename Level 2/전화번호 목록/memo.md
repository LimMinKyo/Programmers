## 정석 풀이(Hash)

```js
function solution(phone_book) {
  const map = new Map();

  for (const phoneNumber of phone_book) {
    map.set(phoneNumber, true);
  }

  for (const phoneNumber of phone_book) {
    for (let i = 1; i < phoneNumber.length; i++) {
      const prefix = phoneNumber.slice(0, i);
      if (map.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}
```
