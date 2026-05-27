def solution(emergency):
    priority_dict = {
        value: index + 1 for index, value in enumerate(sorted(emergency, reverse=True))
    }
    return [priority_dict[value] for value in emergency]
