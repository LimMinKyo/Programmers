function solution(players, callings) {
  const rankMap = new Map();

  players.forEach((player, index) => rankMap.set(player, index));

  callings.forEach((callingPlayer) => {
    const currentRank = rankMap.get(callingPlayer);
    const frontPlayer = players[currentRank - 1];

    [players[currentRank - 1], players[currentRank]] = [
      players[currentRank],
      players[currentRank - 1],
    ];

    rankMap.set(callingPlayer, currentRank - 1);
    rankMap.set(frontPlayer, currentRank);
  });

  return players;
}
