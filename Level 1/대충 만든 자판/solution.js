function solution(keymaps, targets) {
  const map = {};

  keymaps.forEach((keymap) =>
    keymap
      .split("")
      .forEach(
        (key, index) =>
          (map[key] = map[key] ? Math.min(map[key], index + 1) : index + 1)
      )
  );

  return targets.map(
    (target) => target.split("").reduce((acc, cur) => acc + map[cur], 0) || -1
  );
}
