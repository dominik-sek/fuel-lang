import { ANTLRErrorListener } from "antlr4ts";

export class FireErrorListener implements ANTLRErrorListener<any>  {
   errorMessages = [];

  syntaxError<T>(
    recognizer: any,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: any
  ) {
    // console.log(
    //   `${line}:${charPositionInLine} ${msg} ${offendingSymbol}`
    // );
    this.errorMessages.push (`${line}:${charPositionInLine} ${msg}`);
  }
  reportAmbiguity<T>(
    recognizer: any,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    exact: boolean,
    ambigAlts: T[],
    configs: any
  ) {
    console.log(
      `reportAmbiguity ${startIndex} ${stopIndex} ${exact} ${JSON.stringify(
        ambigAlts
      )} ${JSON.stringify(configs)}`
    );
  }
  reportAttemptingFullContext<T>(
    recognizer: any,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: T[],
    configs: any
  ) {
    console.log(
      `reportAttemptingFullContext ${startIndex} ${stopIndex} ${JSON.stringify(
        conflictingAlts
      )} ${JSON.stringify(configs)}`
    );
  }
  reportContextSensitivity<T>(
    recognizer: any,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    prediction: number,
    configs: any
  ) {
    console.log(
      `reportContextSensitivity ${startIndex} ${stopIndex} ${prediction} ${JSON.stringify(
        configs
      )}`
    );
  }

  
}
