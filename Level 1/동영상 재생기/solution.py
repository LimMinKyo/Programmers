def time_to_seconds(time):
    minutes, seconds = time.split(":")
    return int(minutes) * 60 + int(seconds)


def seconds_to_time(seconds):
    return f"{str(seconds // 60).rjust(2, '0')}:{str(seconds % 60).rjust(2, '0')}"


def solution(video_len, pos, op_start, op_end, commands):
    video_len = time_to_seconds(video_len)
    pos = time_to_seconds(pos)
    op_start = time_to_seconds(op_start)
    op_end = time_to_seconds(op_end)

    if op_start <= pos <= op_end:
        pos = op_end

    for command in commands:
        new_pos = pos + 10 if command == "next" else pos - 10

        if new_pos > video_len:
            new_pos = video_len

        if new_pos < 0:
            new_pos = 0

        if op_start <= new_pos <= op_end:
            new_pos = op_end

        pos = new_pos

    return seconds_to_time(pos)
