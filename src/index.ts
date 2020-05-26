import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("season-1819_csv.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlreport("Tottenham");

summary.buildAndPrintReport(matchReader.matches);
