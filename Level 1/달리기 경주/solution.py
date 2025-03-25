def solution(players, callings):
    rank_map = {player: index for index, player in enumerate(players)}

    for calling_player in callings:
        current_rank = rank_map[calling_player]
        front_player = players[current_rank - 1]

        players[current_rank - 1], players[current_rank] = (
            players[current_rank],
            players[current_rank - 1],
        )

        rank_map[calling_player] -= 1
        rank_map[front_player] += 1

    return players
