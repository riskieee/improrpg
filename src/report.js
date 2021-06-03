// main Content class for improRPG

// not yet used!!!!
class Report {
  constructor(reportetPlayer, toReportTxt, reportingPlayer) {
    reportetPlayer._reports.push({ reportTxt: toReportTxt, reporter: reportingPlayer._playerName });
  }
}

module.exports = Report;
