function solution(my_string, index_list) {
  return index_list.reduce((acc, index) => acc + my_string[index], "");
}
