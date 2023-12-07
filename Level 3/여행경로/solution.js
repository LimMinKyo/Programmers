function solution(tickets) {
  const answer = [];

  const dfs = (from, remainTickets, path) => {
    const updatedPath = [...path, from];

    if (!remainTickets.length) {
      answer.push(updatedPath);
    } else {
      remainTickets.forEach((ticket, index) => {
        if (ticket[0] !== from) return;

        const to = ticket[1];
        const updatedRemainTickets = [...remainTickets];
        updatedRemainTickets.splice(index, 1);

        dfs(to, updatedRemainTickets, updatedPath);
      });
    }
  };

  dfs("ICN", tickets, []);

  return answer.sort()[0];
}
