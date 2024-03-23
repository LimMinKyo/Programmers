function solution(my_string, num1, num2) {
  const my_string_arr = [...my_string];
  [my_string_arr[num1], my_string_arr[num2]] = [
    my_string_arr[num2],
    my_string_arr[num1],
  ];
  return my_string_arr.join("");
}
