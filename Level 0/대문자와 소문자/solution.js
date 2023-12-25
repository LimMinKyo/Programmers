function solution(my_string) {
  return [...my_string]
    .map((char) =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}
