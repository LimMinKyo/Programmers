class Solution {
    fun solution(ineq: String, eq: String, n: Int, m: Int): Int {
        var answer: Boolean = false;

        when (ineq + eq) {
            ">=" -> answer = n >= m;
            ">!" -> answer = n > m;
            "<=" -> answer = n <= m;
            "<!" -> answer = n < m;
        }

        return if (answer) 1 else 0
    }
}