function solution(brown, yellow) {
  const sum = brown + yellow;

  // 카펫의 최소높이는 3부터이다. (위아래 갈색, 가운데가 노란색이기 때문에)
  for (let height = 3; height <= brown; height++) {
    // 임의의 높이로 나눌때 나머지가 없을경우만
    if (sum % height === 0) {
      // 가로길이(width)
      const width = sum / height;

      // 테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
      // 결과가 yellow와 같다면 해당 길이(width)와 높이(height) 반환
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}
