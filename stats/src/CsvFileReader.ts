import fs from 'fs';    // file system nodejs module
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

// new type as a tuple 
type MatchData = [Date, string, string , number, number, MatchResult, string];

// class to represent CSV file reader
export class CsvFileReader {
    data: MatchData[]= [];
    
    constructor(public filename: string) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')            // create an array every new line
        .map((row:string): string[] => {
            return row.split(',');  // create an array at every comma
        })
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,   // 'H', 'A' or 'D'
                row[6]
            ]
        })
    }
}