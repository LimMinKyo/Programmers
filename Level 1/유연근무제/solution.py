def time_to_minute(time):
    hour = time // 100
    minute = time % 100
    return hour * 60 + minute


def solution(schedules, timelogs, startday):
    answer = 0

    for schedule, timelog in zip(schedules, timelogs):
        day = startday
        is_ok = True

        for time in timelog:
            if day <= 5 and time_to_minute(schedule) + 10 < time_to_minute(time):
                is_ok = False
                break
            day = day + 1 if day < 7 else 1

        answer += 1 if is_ok else 0

    return answer
