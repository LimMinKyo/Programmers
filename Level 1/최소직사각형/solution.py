def solution(sizes):
    return max(min(size) for size in sizes) * max(max(size) for size in sizes)
