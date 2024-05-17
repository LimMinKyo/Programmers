function solution(records) {
  const nicknameTable = {};

  records.forEach((record) => {
    const [command, uid, nickname] = record.split(" ");

    if (command !== "Leave") nicknameTable[uid] = nickname;
  });

  return records
    .filter((record) => !record.startsWith("Change"))
    .map((record) => {
      const [command, uid] = record.split(" ");

      return `${nicknameTable[uid]}님이 ${
        command === "Enter" ? "들어왔습니다." : "나갔습니다."
      }`;
    });
}
