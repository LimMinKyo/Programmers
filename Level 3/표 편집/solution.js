function solution(n, k, cmd_list) {
  const table = Array.from({ length: n }, (_, index) => getNode(index, n));

  const stack = [];

  cmd_list.forEach((cmd) => {
    if (cmd[0] === "C") {
      stack.push(k);
      table[k].live = false;
      const { prev, next } = table[k];
      if (prev !== null) table[prev].next = next;
      if (next !== null) table[next].prev = prev;
      k = next === null ? prev : next;
    } else if (cmd[0] === "Z") {
      const restore = stack.pop();
      table[restore].live = true;
      const { prev, next } = table[restore];
      if (prev !== null) table[prev].next = restore;
      if (next !== null) table[next].prev = restore;
    } else {
      const [direction, count] = cmd.split(" ");
      for (let i = 0; i < count; i++) {
        if (direction === "U") k = table[k].prev;
        else k = table[k].next;
      }
    }
  });

  return table.map((node) => (node.live ? "O" : "X")).join("");
}

function getNode(index, n) {
  const prev = index - 1;
  const next = index + 1;

  return {
    live: true,
    prev: prev >= 0 ? prev : null,
    next: next < n ? next : null,
  };
}
