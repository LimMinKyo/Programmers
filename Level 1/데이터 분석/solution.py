def solution(data, ext, val_ext, sort_by):
    index_map = {"code": 0, "date": 1, "maximum": 2, "remain": 3}
    filtered_data = [item for item in data if item[index_map[ext]] < val_ext]
    return sorted(filtered_data, key=lambda x: x[index_map[sort_by]])
