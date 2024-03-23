function solution(my_string, queries) {
  queries.forEach(([start, end]) => {
    my_string = [
      ...my_string.slice(0, start),
      ...[...my_string.slice(start, end + 1)].reverse(),
      ...my_string.slice(end + 1),
    ].join("");
  });

  return my_string;
}
