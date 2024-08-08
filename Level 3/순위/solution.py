from collections import defaultdict


def solution(n, results):
    winners = defaultdict(set)
    losers = defaultdict(set)

    for winner, loser in results:
        losers[winner].add(loser)
        winners[loser].add(winner)

    for i in range(1, n + 1):
        for winner in winners[i]:
            losers[winner].update(losers[i])
        for loser in losers[i]:
            winners[loser].update(winners[i])

    return sum(1 for i in range(1, n + 1) if len(winners[i]) + len(losers[i]) == n - 1)
