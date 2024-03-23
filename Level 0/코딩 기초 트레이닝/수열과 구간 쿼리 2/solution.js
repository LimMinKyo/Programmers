function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((num) => num > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
