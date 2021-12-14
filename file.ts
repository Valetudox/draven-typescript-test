// models/languages.ts

export enum Languages {
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript',
  PYTHON = 'python'
}


// akarmimas.ts
import { Languages } from './models/languages';

console.log(Languages); // itt faszan az tolt be amit importalok

export class CodeRunner {

  constructor(...) {
      console.log(typeof Languages); // undefined
  }

}


// akarmimas2.ts
import { Languages as L } from './models/languages';

const Languages = L;
console.log(Languages); // itt most is jo

export class CodeRunner {

  constructor(...) {
      console.log(typeof Languages); // most mar itt is jo
  }

}