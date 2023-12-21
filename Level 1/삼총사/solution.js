function solution(number) {
  let answer = 0;

  const dfs = (current, start) => {
    if (current.length === 3) {
      answer += current.reduce((acc, cur) => acc + cur, 0) ? 0 : 1;
      return;
    }

    for (let i = start; i < number.length; i++) {
      dfs([...current, number[i]], i + 1);
    }
  };

  dfs([], 0);

  return answer;
}
