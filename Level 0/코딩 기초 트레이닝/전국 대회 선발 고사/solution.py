def solution(ranks, attendances):
    students = sorted(
        [
            (rank, i)
            for i, (rank, attendance) in enumerate(zip(ranks, attendances))
            if attendance
        ]
    )
    a, b, c = map(lambda x: x[1], students[:3])
    return 10000 * a + 100 * b + c
