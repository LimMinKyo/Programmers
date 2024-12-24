def solution(scores):
    avg_scores = [(english + math) / 2 for (english, math) in scores]
    sorted_avg_scores = sorted(avg_scores, reverse=True)
    return [sorted_avg_scores.index(score) + 1 for score in avg_scores]
