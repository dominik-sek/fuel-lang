import { ANTLRErrorListener } from "antlr4ts";

export class FireErrorListener implements ANTLRErrorListener<any> {
   errorMessage : string = "";
  syntaxError<T>(
    recognizer: any,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: any
  ) {
    console.log(
      `${line}:${charPositionInLine} ${msg} ${offendingSymbol}`
    );
    this.errorMessage = `${line}:${charPositionInLine} ${msg} ${offendingSymbol}`;
  }
  getSyntaxErrorMessage() {
    return this.errorMessage;
  }
  
}
