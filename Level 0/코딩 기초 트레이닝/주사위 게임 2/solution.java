import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Solution {
    public int solution(int a, int b, int c) {
        List<Integer> dices = List.of(a, b, c);
        Integer size = dices.stream().collect(Collectors.toSet()).size();

        switch (size) {
            case 1:
                return calculate(dices, 3);
            case 2:
                return calculate(dices, 2);
            case 3:
                return calculate(dices, 1);
            default:
                return 0;
        }
    }

    private int calculate(List<Integer> dices, int n) {
        int result = 1;

        for (int i = 1; i <= n; i++) {
            result *= Math.pow(dices.get(0), i) + Math.pow(dices.get(1), i) + Math.pow(dices.get(2), i);
        }

        return result;
    }
}
