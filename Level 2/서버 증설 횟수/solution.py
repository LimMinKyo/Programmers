def solution(players, m, k):
    servers = [0] * 24

    for i in range(len(players)):
        servers_range = servers[i - k + 1 : i] if i - k + 1 >= 0 else servers[:i]
        added_servers = sum(servers_range)
        servers_required = players[i] // m

        if added_servers < servers_required:
            servers[i] = servers_required - added_servers

    return sum(servers)
