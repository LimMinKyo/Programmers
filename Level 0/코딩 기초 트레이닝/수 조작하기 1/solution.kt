class Solution {
    fun solution(n: Int, control: String): Int {
        val map = mapOf('w' to 1, 's' to -1, 'd' to 10, 'a' to -10)
        return n + control.map { map.getValue(it) }.sum()
    }
}