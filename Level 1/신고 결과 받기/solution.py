def solution(id_list, reports, k):
    answer = [0] * len(id_list)

    reports = set(reports)

    reported_users = {user: 0 for user in id_list}

    for report in reports:
        reported_user = report.split(" ")[1]
        reported_users[reported_user] += 1

    for report in reports:
        report_user, reported_user = report.split(" ")

        if reported_users[reported_user] >= k:
            answer[id_list.index(report_user)] += 1

    return answer
