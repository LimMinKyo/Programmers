import heapq


def solution(book_times):
    book_times = sorted(
        [(time_to_minutes(end), time_to_minutes(start)) for start, end in book_times],
        key=lambda x: x[1]
    )

    queue = [book_times[0]]

    for i in range(1, len(book_times)):
        book_time = book_times[i]
        _, start = book_time

        if queue[0][0] + 10 > start:
            heapq.heappush(queue, book_time)
        else:
            heapq.heappop(queue)
            heapq.heappush(queue, book_time)

    return len(queue)


def time_to_minutes(time):
    hours, minutes = time.split(":")
    return int(hours) * 60 + int(minutes)
