function solution(n) {
  const answer = getAnswer(
    n,
    0,
    Array(n).fill(false),
    Array(n * 2).fill(false),
    Array(n * 2).fill(false)
  );
  return answer;
}

function getAnswer(n, y, width, diagonal1, diagonal2) {
  let answer = 0;

  if (y === n) {
    answer++;
  } else {
    for (let i = 0; i < n; i++) {
      if (width[i] || diagonal1[i + y] || diagonal2[i - y + n]) {
        continue;
      }
      width[i] = diagonal1[i + y] = diagonal2[i - y + n] = true;
      answer += getAnswer(n, y + 1, width, diagonal1, diagonal2);
      width[i] = diagonal1[i + y] = diagonal2[i - y + n] = false;
    }
  }

  return answer;
}
