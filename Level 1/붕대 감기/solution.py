def solution(bandage, health, attacks):
    max_health = health
    bandage_total_time, recovery_by_second, additional_recovery = bandage
    attack_map = {time: damage for (time, damage) in attacks}

    bandage_time = 0

    for second in range(1, attacks[-1][0] + 1):
        if second in attack_map:
            health -= attack_map[second]
            bandage_time = 0
            if health <= 0:
                return -1
        else:
            bandage_time += 1
            health += recovery_by_second
            if bandage_total_time == bandage_time:
                health += additional_recovery
                bandage_time = 0
            if health > max_health:
                health = max_health

    return health
