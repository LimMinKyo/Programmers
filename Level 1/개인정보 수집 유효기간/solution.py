def to_days(date):
    year, month, day = map(int, date.split("."))
    return year * 12 * 28 + month * 28 + day


def solution(today, terms, privacies):
    term_map = {term[0]: int(term[2:]) * 28 for term in terms}
    today = to_days(today)

    answer = []

    for index, privacy in enumerate(privacies):
        date, term = privacy.split(" ")
        expire_date = to_days(date) + term_map[term]

        if expire_date <= today:
            answer.append(index + 1)

    return answer
