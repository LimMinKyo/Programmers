function solution(babbling) {
  return babbling.filter((word) => /^(aya|ye|woo|ma)+$/.test(word)).length;
}
