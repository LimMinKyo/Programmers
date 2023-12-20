function solution(s) {
  const words = s.split(" ");

  return words
    .map((word) =>
      [...word]
        .map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
