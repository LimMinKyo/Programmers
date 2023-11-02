function solution(nums) {
  const set = new Set(nums);
  const canGetNum = nums.length / 2;

  return set.size >= canGetNum ? canGetNum : set.size;
}
