class Solution {
    fun solution(num_list: IntArray): Int {
        val sum = num_list.sum();
        val multiply = num_list.reduce { acc, cur -> acc * cur }
        return if (multiply < sum * sum) 1 else 0
    }
}