function solution(videoLen, pos, opStart, opEnd, commands) {
  videoLen = timeToSeconds(videoLen);
  pos = timeToSeconds(pos);
  opStart = timeToSeconds(opStart);
  opEnd = timeToSeconds(opEnd);

  if (pos >= opStart && pos <= opEnd) {
    pos = opEnd;
  }

  commands.forEach((command) => {
    let newPos = command === "next" ? pos + 10 : pos - 10;

    if (newPos > videoLen) {
      newPos = videoLen;
    }

    if (newPos < 0) {
      newPos = 0;
    }

    if (newPos >= opStart && newPos <= opEnd) {
      newPos = opEnd;
    }

    pos = newPos;
  });

  return secondsToTime(pos);
}

function timeToSeconds(time) {
  const [minutes, seconds] = time.split(":");
  return Number(minutes) * 60 + Number(seconds);
}

function secondsToTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
    seconds % 60
  ).padStart(2, "0")}`;
}
