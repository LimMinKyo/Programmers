function solution(my_strings, parts) {
  return parts
    .map(([start, end], index) => my_strings[index].slice(start, end + 1))
    .join("");
}
