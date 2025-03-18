def solution(brown, yellow):
    total_size = brown + yellow

    for height in range(3, int(total_size**0.5) + 1):
        if total_size % height == 0:
            width = total_size / height
            if (width - 2) * (height - 2) == yellow:
                return [width, height]
