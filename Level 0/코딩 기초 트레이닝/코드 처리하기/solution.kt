class Solution {
    fun solution(code: String): String {
        var answer = ""
        var mode = 0;

        code.forEachIndexed { i, v ->
            if (v == '1') {
                mode = if (mode == 0) 1 else 0
                return@forEachIndexed
            }

            if (i % 2 == mode) {
                answer += v
            }
        }

        return if (answer.isEmpty()) "EMPTY" else answer;
    }
}