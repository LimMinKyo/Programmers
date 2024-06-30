function solution(myString, pat) {
  return +[...myString]
    .map((char) => (char === "A" ? "B" : "A"))
    .join("")
    .includes(pat);
}
