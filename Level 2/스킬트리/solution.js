function solution(skill, skill_trees) {
  return skill_trees.filter((skill_tree) => {
    const regexp = new RegExp(`[^${skill}]`, "g");
    skill_tree = skill_tree.replace(regexp, "");
    return skill.startsWith(skill_tree);
  }).length;
}
