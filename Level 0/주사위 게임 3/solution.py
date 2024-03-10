def solution(a, b, c, d):
    nums = [a, b, c, d]
    counts = [nums.count(num) for num in nums]
    maxCount = max(counts)

    if maxCount == 4:
        return 1111 * a
    if maxCount == 3:
        return (10 * nums[counts.index(3)] + nums[counts.index(1)]) ** 2
    if maxCount == 2:
        if min(counts) == 2:
            p, q = max(nums), min(nums)
            return (p + q) * (p - q)
        else:
            p = nums[counts.index(2)]
            return (a * b * c * d) / p**2
    if maxCount == 1:
        return min(nums)
