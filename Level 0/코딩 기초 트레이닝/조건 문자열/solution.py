operations = {
    ">=": lambda n, m: n >= m,
    ">!": lambda n, m: n > m,
    "<=": lambda n, m: n <= m,
    "<!": lambda n, m: n < m,
}


def solution(ineq, eq, n, m):
    operation = operations[ineq + eq]
    return int(operation(n, m))
