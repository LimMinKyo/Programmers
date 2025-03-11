function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/[.]+/g, ".")
    .replace(/^[.]|[.]$/g, "")
    .replace(/^$/g, "a")
    .slice(0, 15)
    .replace(/[.]$/g, "");

  return answer.padEnd(3, answer.at(-1));
}
