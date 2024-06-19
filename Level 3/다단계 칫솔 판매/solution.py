def solution(enroll, referral, sellers, amounts):
    parent = dict(zip(enroll, referral))

    total = {name: 0 for name in enroll}

    for seller, amount in zip(sellers, amounts):
        money = amount * 100

        while money > 0 and seller != "-":
            distribution_money = money // 10
            total[seller] += money - distribution_money
            seller = parent[seller]
            money = distribution_money

    return [total[name] for name in enroll]
