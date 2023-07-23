function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((spell, index) => {
          if (index === 0) {
            return spell.toUpperCase();
          } else {
            return spell.toLowerCase();
          }
        })
        .join("");
    })
    .join(" ");
}
