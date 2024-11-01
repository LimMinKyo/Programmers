class Solution {
    fun solution(arr: IntArray, queries: Array<IntArray>): IntArray {
        queries.forEach { (first, second) ->
            arr[first] = arr[second].also { arr[second] = arr[first] }
        }
        return arr
    }
}