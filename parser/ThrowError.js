import antlr4 from 'antlr4';

export class ThrowError extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    let message = `Synatx error at line ${line} column ${column} : ${msg}`;
    console.log(message);
    return message;
  }
  reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    console.log(`I don't know what to do with this: ${prediction}`);
    console.log(`Error at line ${startIndex} column ${stopIndex} : ${prediction}`);
  }
  reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    console.log(`I don't know what to do with this: ${ambigAlts}`);
    console.log(`Error at line ${startIndex} column ${stopIndex} : ${ambigAlts}`);
  }

}