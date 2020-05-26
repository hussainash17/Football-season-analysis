import { OutputTarger } from "../Summary";

export class ConsoleReport implements OutputTarger {
  print(report: string): void {
    console.log(report);
  }
}
