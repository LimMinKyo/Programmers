def solution(friends, gifts):
    gift_map = {friend: {"receive": [], "send": []} for friend in friends}

    for gift in gifts:
        sender, receiver = gift.split(" ")
        gift_map[sender]["send"].append(receiver)
        gift_map[receiver]["receive"].append(sender)

    next_month_receive_map = {friend: 0 for friend in friends}

    for i in range(len(friends)):
        for j in range(i + 1, len(friends)):
            A = friends[i]
            B = friends[j]

            A_to_B_gift = gift_map[A]["send"].count(B)
            B_to_A_gift = gift_map[B]["send"].count(A)

            if A_to_B_gift == B_to_A_gift:
                A_gift_score = len(gift_map[A]["send"]) - len(gift_map[A]["receive"])
                B_gift_score = len(gift_map[B]["send"]) - len(gift_map[B]["receive"])
                if A_gift_score > B_gift_score:
                    next_month_receive_map[A] += 1
                elif B_gift_score > A_gift_score:
                    next_month_receive_map[B] += 1
            else:
                if A_to_B_gift > B_to_A_gift:
                    next_month_receive_map[A] += 1
                elif B_to_A_gift > A_to_B_gift:
                    next_month_receive_map[B] += 1

    return max(next_month_receive_map.values())
