def solution(records):
    nickname_table = {}

    for record in records:
        split_record = record.split(" ")
        command = split_record[0]

        if command != "Leave":
            uid, nickname = split_record[1], split_record[2]
            nickname_table[uid] = nickname

    answer = []

    for record in records:
        split_record = record.split(" ")
        command, uid = split_record[0], split_record[1]

        if command != "Change":
            answer.append(
                f"{nickname_table[uid]}님이 {'들어왔습니다.' if command == 'Enter' else '나갔습니다.'}"
            )

    return answer
