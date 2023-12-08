function solution(name) {
  let totalCountChangeChar = 0;
  let minMoveCount = name.length - 1;

  [...name].forEach((char, index) => {
    totalCountChangeChar += countChangeChar(char);

    let nextIndex = index + 1;

    while (nextIndex < name.length && name[nextIndex] === "A") {
      nextIndex++;
    }

    minMoveCount = Math.min(
      minMoveCount,
      index * 2 + name.length - nextIndex,
      index + 2 * (name.length - nextIndex)
    );
  });

  return totalCountChangeChar + minMoveCount;
}

function countChangeChar(char) {
  const moveTopCount = char.charCodeAt() - "A".charCodeAt();
  const moveBottomCount = "Z".charCodeAt() + 1 - char.charCodeAt();
  return Math.min(moveTopCount, moveBottomCount);
}
