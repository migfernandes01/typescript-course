import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

// WinsAnalysis class that implements ("follows its rules") Analyzer interface
export class WinsAnalysis implements Analyzer{
    // initialize teamName in constructor (from user)
    constructor(public teamName: string){}
    
    // run an analysis for wins of a team
    run(matches: MatchData[]): string {
        let teamWins = 0;

        for(let match of matches) {
            if(match[1] === this.teamName && match[5] === MatchResult.HomeWin){
                teamWins++;
            } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin){
                teamWins++;
            }
        }

        return `${this.teamName} won ${teamWins} games during 2018/2019`;
    }
}