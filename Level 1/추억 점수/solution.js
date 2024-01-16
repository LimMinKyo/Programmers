function solution(names, yearning, photos) {
  const map = new Map();
  names.forEach((name, index) => map.set(name, yearning[index]));

  return photos.map((photo) =>
    photo.reduce((acc, cur) => acc + (map.get(cur) || 0), 0)
  );
}
