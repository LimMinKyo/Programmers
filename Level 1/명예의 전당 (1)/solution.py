import heapq


def solution(k, scores):
    heap = []

    answer = []

    for score in scores:
        if len(heap) < k:
            heapq.heappush(heap, score)
        else:
            if score > heap[0]:
                heapq.heappush(heap, score)
                heapq.heappop(heap)

        answer.append(heap[0])

    return answer
