function solution(str1, str2) {
  const set1 = getSet(str1);
  const set2 = getSet(str2);

  const intersection = getIntersection(set1, set2);
  const unionLength = set1.length + set2.length - intersection.length;

  const jaccardSimilarity =
    !intersection.length && !unionLength
      ? 1
      : intersection.length / unionLength;

  return ~~(jaccardSimilarity * 65536);
}

function getSet(str) {
  const set = [];

  [...str].forEach((char, index) => {
    if (index + 1 > str.length - 1) {
      return;
    }

    const twoChar = char.toLowerCase() + str[index + 1].toLowerCase();

    if (twoChar.search(/[^a-z]/g) === -1) {
      set.push(twoChar);
    }
  });

  return set;
}

function getIntersection(set1, set2) {
  const copySet1 = [...set1];
  const copySet2 = [...set2];

  const set = [];

  copySet1.forEach((value) => {
    const index = copySet2.indexOf(value);

    if (index >= 0) {
      set.push(value);
      copySet2.splice(index, 1);
    }
  });

  return set;
}
