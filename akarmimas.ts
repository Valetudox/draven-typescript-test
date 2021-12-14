import { Languages } from "./languages";

console.log(Languages); // itt faszan az tolt be amit importalok

export class CodeRunner {
  constructor() {
    console.log(typeof Languages); // undefined
  }
}
