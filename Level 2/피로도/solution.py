def dfs(k, count, dungeons, visited):
    answer = count

    for i in range(len(dungeons)):
        if k >= dungeons[i][0] and not visited[i]:
            visited[i] = True
            answer = max(answer, dfs(k - dungeons[i][1], count + 1, dungeons, visited))
            visited[i] = False

    return answer


def solution(k, dungeons):
    visited = [False] * len(dungeons)
    answer = dfs(k, 0, dungeons, visited)
    return answer
