import datetime


def solution(a, b):
    WEAKS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    weak_index = datetime.date(2016, a, b).weekday()
    return WEAKS[weak_index]
