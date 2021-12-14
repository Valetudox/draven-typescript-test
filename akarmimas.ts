import { Languages } from "./languages";

console.log(Languages); // itt faszan az tolt be amit importalok

export class CodeRunner1 {
  constructor() {
    console.log(typeof Languages); // undefined
  }
}
