import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(int[] num_list) {
        int odd = Integer.parseInt(Arrays.stream(num_list).filter(num -> num % 2 != 0).mapToObj(String::valueOf).collect(Collectors.joining()));
        int even = Integer.parseInt(Arrays.stream(num_list).filter(num -> num % 2 == 0).mapToObj(String::valueOf).collect(Collectors.joining()));
        return odd + even;
    }
}