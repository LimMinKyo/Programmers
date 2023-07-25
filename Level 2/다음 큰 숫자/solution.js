function solution(n) {
  const nOneLength = n.toString(2).replace(/0/g, "").length;

  let result = n + 1;
  while (true) {
    const resultOneLength = result.toString(2).replace(/0/g, "").length;

    if (nOneLength === resultOneLength) {
      return result;
    }

    result++;
  }
}
