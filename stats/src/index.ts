import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";
import { HtmlReport } from "./ReportTargets/HtmlReport";
import { WinsAnalysis } from "./Analysers/WinsAnalysis";
import { Summary } from "./Summary";

// new instance of MatchReader
const matches = new MatchReader('football.csv');
matches.read();

// CLASS COMPOSITION TO GENERATE REPORTS

// HTML REPORT
// static method inside Summary class
Summary.winsAnalysisWithHtmlReport('Man City');


// CONSOLE REPORT
// new instance of summmary taking
// a new instance of WinsAnalysis and new instance of ConsoleReport
const consoleSummary = new Summary(
    new WinsAnalysis('Man United'), new ConsoleReport()
);

consoleSummary.buildAndPrintReport(matches.data);