function solution(spell, dic) {
  return dic.some((word) => spell.sort().join("") === [...word].sort().join(""))
    ? 1
    : 2;
}
