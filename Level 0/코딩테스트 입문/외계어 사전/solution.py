def solution(spell, dic):
    return 1 if [word for word in dic if sorted(word) == sorted(spell)] else 2
