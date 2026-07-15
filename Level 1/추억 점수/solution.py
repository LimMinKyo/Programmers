def solution(names, yearnings, photos):
    name_yearning_dict = dict(zip(names, yearnings))
    return [
        sum(name_yearning_dict[name] for name in photo if name in name_yearning_dict)
        for photo in photos
    ]
