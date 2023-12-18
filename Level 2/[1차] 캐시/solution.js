function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  cities.forEach((city) => {
    const lowerCity = city.toLowerCase();

    if (cache.includes(lowerCity)) {
      answer += 1;
    } else {
      answer += 5;
    }

    if (!cacheSize) {
      return;
    }

    if (cache.includes(lowerCity)) {
      cache.splice(cache.indexOf(lowerCity), 1);
      cache.push(lowerCity);
    } else if (cache.length >= cacheSize) {
      cache.shift();
      cache.push(lowerCity);
    } else {
      cache.push(lowerCity);
    }
  });

  return answer;
}
