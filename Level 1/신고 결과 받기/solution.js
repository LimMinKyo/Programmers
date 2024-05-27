function solution(id_list, report, k) {
  const reports = [...new Set(report)].map((report) => report.split(" "));

  const reportedUsers = {};
  const counts = {};

  reports.forEach(([reportUser, reportedUser]) => {
    reportedUsers[reportedUser] = reportedUsers[reportedUser]
      ? [...reportedUsers[reportedUser], reportUser]
      : [reportUser];
  });

  Object.values(reportedUsers).forEach((reportUsers) => {
    if (reportUsers.length >= k) {
      reportUsers.forEach((reportUser) => {
        counts[reportUser] = counts[reportUser] ? counts[reportUser] + 1 : 1;
      });
    }
  });

  return id_list.map((user) => (counts[user] ? counts[user] : 0));
}
