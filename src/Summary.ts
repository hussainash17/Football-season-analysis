import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTarget/GtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarger {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlreport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  // here is the use of composition
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarger) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
