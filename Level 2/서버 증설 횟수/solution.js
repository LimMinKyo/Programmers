function solution(players, m, k) {
  const servers = new Array(24).fill(0);

  players.forEach((player, i) => {
    const serversRange =
      i - k + 1 >= 0 ? servers.slice(i - k + 1, i) : servers.slice(0, i);
    const serversRequired = Math.floor(player / m);
    const addedServers = sum(serversRange);

    if (addedServers < serversRequired) {
      servers[i] = serversRequired - addedServers;
    }
  });

  return sum(servers);
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
