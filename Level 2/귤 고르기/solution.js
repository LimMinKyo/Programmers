function solution(k, tangerines) {
  const tangerineCountDataObj = {};
  let answer = 0;

  tangerines.forEach((tangerine) => {
    tangerineCountDataObj[tangerine] = tangerineCountDataObj[tangerine]
      ? tangerineCountDataObj[tangerine] + 1
      : 1;
  });

  const tangerineCountDataArray = Object.entries(tangerineCountDataObj).map(
    ([key, value]) => ({ key, value })
  );
  tangerineCountDataArray.sort((a, b) => b.value - a.value);

  tangerineCountDataArray.forEach(({ key, value }) => {
    if (k <= 0) {
      return;
    }

    k = k - value;
    answer++;
  });

  return answer;
}
