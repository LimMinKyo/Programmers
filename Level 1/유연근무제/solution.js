function solution(schedules, timelogs, startday) {
  let answer = 0;
  const n = schedules.length;

  for (let i = 0; i < n; i++) {
    let day = startday;
    let isOk = true;
    const schedule = schedules[i];
    const timelog = timelogs[i];

    for (const time of timelog) {
      if (day <= 5 && timeToMinute(schedule + 10) < timeToMinute(time)) {
        isOk = false;
        break;
      }
      day = day < 7 ? day + 1 : 1;
    }

    if (isOk) answer++;
  }

  return answer;
}

function timeToMinute(time) {
  const hour = Math.floor(time / 100);
  const minute = time % 100;
  return hour * 60 + minute;
}
