class Solution {
    fun solution(a: Int, d: Int, included: BooleanArray): Int {
        return included.indices.filter { included[it] }.sumOf { a + (it * d) }
    }
}