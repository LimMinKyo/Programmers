def solution(s):
    return "".join(sorted([alphabet for alphabet in s if s.count(alphabet) == 1]))
