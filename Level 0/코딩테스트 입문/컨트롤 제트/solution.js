function solution(s) {
  return s.split(" ").reduce((acc, cur, index, origin) => {
    if (cur === "Z") {
      return acc - +origin[index - 1];
    }

    return acc + +cur;
  }, 0);
}
