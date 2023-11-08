function solution(sizes) {
  const widthList = [];
  const heightList = [];

  sizes.forEach(([width, height]) => {
    const maxLength = Math.max(width, height);
    const minLength = Math.min(width, height);

    widthList.push(maxLength);
    heightList.push(minLength);
  });

  return Math.max(...widthList) * Math.max(...heightList);
}
