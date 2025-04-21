function solution(n, stations, w) {
  let answer = 0;
  let location = 1;
  let index = 0;

  while (location <= n) {
    if (index < stations.length && location >= stations[index] - w) {
      location = stations[index] + w + 1;
      index++;
    } else {
      location += w * 2 + 1;
      answer++;
    }
  }

  return answer;
}
