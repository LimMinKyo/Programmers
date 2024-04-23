function solution(arr, query) {
  return query.reduce(
    (acc, _, i) => (i % 2 ? acc.slice(query[i]) : acc.slice(0, query[i] + 1)),
    [...arr]
  );
}
