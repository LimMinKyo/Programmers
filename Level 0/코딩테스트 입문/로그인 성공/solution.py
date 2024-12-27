def solution(id_pw, db):
    id, pw = id_pw
    db_dict = dict(db)
    return (
        "login" if db_dict.get(id) == pw else "wrong pw" if db_dict.get(id) else "fail"
    )
