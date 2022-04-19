import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from './MatchData';

// specific class to read files containing data about soccer matches
// extends the abstract class CsvFileReader, in order to use it's methods
export class MatchReader extends CsvFileReader<MatchData>{
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,   // 'H', 'A' or 'D'
            row[6]
        ]
    }
}   