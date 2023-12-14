function solution(routes) {
  let answer = 1;

  routes.sort((a, b) => a[0] - b[0]);

  let lastExit = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    const [entry, exit] = routes[i];

    if (lastExit < entry) {
      answer++;
      lastExit = exit;
    }

    if (lastExit > exit) {
      lastExit = exit;
    }
  }

  return answer;
}
