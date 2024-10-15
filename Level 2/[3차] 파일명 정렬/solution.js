function solution(files) {
  return files
    .map((fileName, index) => {
      const [head, num] = fileName.split(/([0-9]+)/);
      return { fileName, head: head.toLowerCase(), num: +num, index };
    })
    .sort((a, b) =>
      a.head.localeCompare(b.head)
        ? a.head.localeCompare(b.head)
        : a.num !== b.num
        ? a.num - b.num
        : a.index - b.index
    )
    .map((file) => file.fileName);
}
