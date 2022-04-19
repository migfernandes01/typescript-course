import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./Analysers/WinsAnalysis";
import { HtmlReport } from "./ReportTargets/HtmlReport";

// interface with 1 method
export interface Analyzer {
    run(matches: MatchData[]): string
}

// interface with 1 method
export interface OutputTarget {
    print(report: string): void
}

// example of class composition
// summary class receives an instance of Analyzer and OutputTarget
export class Summary {
    // static method, can be called without creating an instance of Summary class
    static winsAnalysisWithHtmlReport(teamName: string): Summary {
        //return new instance of summary with wins analysis and html report
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport()
        );
    }

    // constructor that receives 2 instances of other classes
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
