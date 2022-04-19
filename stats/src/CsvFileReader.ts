import fs from 'fs';    // file system nodejs module
import { MatchResult } from './MatchResult';

// abstract class to represent CSV file reader
export abstract class CsvFileReader <T> {
    // fields
    data: T[]= [];
    
    // constructor initializing filename property with what we get instanciating the class
    constructor(public filename: string) {}

    // abstract class definition
    abstract mapRow(row: string[]): T;

    // methods
    // read a file using fs
    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')            // create an array every new line
        .map((row:string): string[] => {
            return row.split(',');  // create an array at every comma
        })
        .map(this.mapRow);
    }
}