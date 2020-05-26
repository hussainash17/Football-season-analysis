import { OutputTarger } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarger {
  print(report: string): void {
    const html = `
        <div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
        <div>
        `;

    fs.writeFileSync("report.html", html);
  }
}
