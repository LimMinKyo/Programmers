def solution(n):
    prime_set = set()

    for i in range(2, n + 1):
        while n % i == 0:
            n /= i
            prime_set.add(i)

    return sorted(list(prime_set))
