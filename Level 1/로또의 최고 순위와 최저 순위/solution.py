def solution(lottos, win_nums):
    rank = [6, 6, 5, 4, 3, 2, 1]
    min_count = len([num for num in lottos if num in win_nums])
    zero_count = lottos.count(0)

    max_count = min_count + zero_count

    return [rank[max_count], rank[min_count]]
