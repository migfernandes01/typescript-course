import fs from 'fs';
import { OutputTarget } from "../Summary";

// ConsoleReport class that implements the OutputTarget interface
export class HtmlReport implements OutputTarget{
    // print report as HTML
    print(report: string): void {
        // HTML snippet
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <p>${report}</p>
            </div>
        `;

        fs.writeFileSync('report.html', html);
    }
}