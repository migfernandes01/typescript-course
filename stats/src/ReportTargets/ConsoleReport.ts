import { OutputTarget } from "../Summary";

// ConsoleReport class that implements the OutputTarget interface
export class ConsoleReport implements OutputTarget {
    // Print report string
    print(report: string): void {
        console.log(report);
    }
}