## 다른 풀이

```js
function solution(word) {
  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const plus = [781, 156, 31, 6, 1];

  return word
    .split("")
    .reduce((acc, char, idx) => acc + obj[char] * plus[idx] + 1, 0);
}
```

```js
function solution(word) {
  const result = [];
  const str = "";
  for (let i = 1; i <= 5; i++) dfs(str, i, result);
  return result.sort().indexOf(word) + 1;
}

const dfs = (word, length, result) => {
  const vowels = [..."AEIOU"];
  if (length === word.length) {
    result.push(word);
    return;
  }
  vowels.forEach((vowel) => {
    dfs(word + vowel, length, result);
  });
};
```

## 참고

- https://jinn2u.tistory.com/9
- https://han-joon-hyeok.github.io/posts/programmers-vowel-dictionary/
