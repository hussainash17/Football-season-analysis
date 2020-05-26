import { CsvFileReader } from "./CsvFilereader";
import { dateStringToDate } from "../Utils";
import { MatchResult } from "../MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // type assestion
      row[5] as MatchResult, // 'H', 'A', 'C'
      row[6],
    ];
  }
}
