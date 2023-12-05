function solution(begin, target, words) {
  const visited = { [begin]: 0 };
  const queue = [begin];

  while (queue.length) {
    const current = queue.shift();

    words.forEach((word) => {
      if (isConnected(word, current) && !visited[word]) {
        visited[word] = visited[current] + 1;
        queue.push(word);
      }
    });
  }

  return visited[target] ? visited[target] : 0;
}

function isConnected(str1, str2) {
  let count = 0;

  [...str1].forEach((char, index) => {
    if (char !== str2[index]) {
      count++;
    }
  });

  return count === 1;
}
