// akarmimas2.ts
import { Languages as L } from "./languages";

const Languages = L;
console.log(Languages); // itt most is jo

export class CodeRunner {
  constructor() {
    console.log(typeof Languages); // most mar itt is jo
  }
}
