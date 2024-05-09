def solution(todo_list, finished):
    return [todo for index, todo in enumerate(todo_list) if not finished[index]]
