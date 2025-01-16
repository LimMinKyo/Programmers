function solution(common) {
  return common[2] - common[1] === common[1] - common[0]
    ? common.at(-1) + (common[1] - common[0])
    : common.at(-1) * ((common[2] - common[1]) / (common[1] - common[0]));
}
