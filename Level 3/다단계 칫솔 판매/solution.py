def solution(enroll, referral, sellers, amounts):
    parent = dict(zip(enroll, referral))

    total = {name: 0 for name in enroll}

    for seller, amount in zip(sellers, amounts):
        money = amount * 100
        cur_name = seller

        while money > 0 and cur_name != "-":
            distribution_money = money // 10
            total[cur_name] += money - distribution_money
            cur_name = parent[cur_name]
            money = distribution_money

    return [total[name] for name in enroll]
