def solution(wallet, bill):
    answer = 0

    wallet_width, wallet_height = sorted(wallet, reverse=True)
    bill_width, bill_height = sorted(bill, reverse=True)

    while bill_width > wallet_width or bill_height > wallet_height:
        half_bill_width = bill_width // 2
        bill_width, bill_height = sorted([half_bill_width, bill_height], reverse=True)
        answer += 1

    return answer
