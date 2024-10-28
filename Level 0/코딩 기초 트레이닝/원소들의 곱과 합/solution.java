import java.util.Arrays;

class Solution {
    public int solution(int[] num_list) {
        int sum = Arrays.stream(num_list).sum();
        int multiply = Arrays.stream(num_list).reduce((acc, cur) -> acc * cur).getAsInt();
        return multiply < sum * sum ? 1 : 0;
    }
}