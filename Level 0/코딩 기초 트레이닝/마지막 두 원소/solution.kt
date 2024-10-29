class Solution {
    fun solution(num_list: IntArray): IntArray {
        val answer = num_list.toMutableList().apply {
            val (second, last) = num_list.takeLast(2)
            if (last > second) add(last - second)
            else add(last * 2)
        }
        return answer.toIntArray()
    }
}