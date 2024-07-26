def dfs(computer, computers, visited):
    visited[computer] = True
    for current_computer, is_connected in enumerate(computers[computer]):
        if not visited[current_computer] and is_connected:
            dfs(current_computer, computers, visited)


def solution(n, computers):
    answer = 0
    visited = [False] * n

    for computer in range(n):
        if not visited[computer]:
            dfs(computer, computers, visited)
            answer += 1

    return answer
