function solution(ranks, attendances) {
  const [a, b, c] = ranks
    .map((rank, index) => [index, rank])
    .filter((_, index) => attendances[index])
    .sort((a, b) => a[1] - b[1])
    .map(([student]) => student);

  return 10000 * a + 100 * b + c;
}
