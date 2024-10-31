class Solution {
    fun solution(numLog: IntArray): String {
        val map = mapOf(1 to 'w', -1 to 's', 10 to 'd', -10 to 'a')
        return (1..numLog.lastIndex).map { map.getValue(numLog[it] - numLog[it - 1]) }.joinToString("")
    }
}