class Solution {
    fun solution(arr: IntArray, queries: Array<IntArray>): IntArray {
        return queries.map { (s, e, k) ->
            arr.slice(s..e).filter { it > k }.minOrNull() ?: -1
        }.toIntArray()
    }
}