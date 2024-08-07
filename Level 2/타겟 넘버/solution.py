def solution(numbers, target):
    def dfs(total, index):
        count = 0

        if index == len(numbers):
            return 1 if total == target else 0

        count += dfs(total + numbers[index], index + 1)
        count += dfs(total - numbers[index], index + 1)

        return count

    answer = dfs(0, 0)

    return answer
