import './App.css';
import Editor from 'react-simple-code-editor';
import Terminal from './components/Terminal';
import React, { useState, useEffect } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// import "prismjs/themes/prism.css";
import { ANTLRInputStream, CommonTokenStream, Lexer } from 'antlr4ts';
import { FireLexer } from './parser/FireLexer.ts'
import { FireParser } from './parser/FireParser.ts'
import  Visitor  from './parser/Visitor.ts';
import styled from 'styled-components';
import TerminalLine from './components/TerminalLine';
import {FireErrorListener} from './parser/FireErrorListener.ts';

let codeString = ``;
let codeQueueString = `TODO:
1) SYNTAX HIGHLIGHTER
2) IMPLEMENT LOGIC FOR RELATIONS, IF THEN DO
`;


function App() {
  const [code, setCode] = useState(codeString);
  const [codeQueue, setCodeQueue] = useState(codeQueueString);

  let chars = new ANTLRInputStream(code);
  let lexer = new FireLexer(chars);
  let tokens  = new CommonTokenStream(lexer);
  let parser = new FireParser(tokens);
  let parserErrorListener = new FireErrorListener();
  let lexerErrorListener = new FireErrorListener();

  parser.removeErrorListeners();
  parser.addErrorListener(parserErrorListener)
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerErrorListener)
  parser.buildParseTrees = true;
  let tree = parser.compilationUnit();
  let visitor = new Visitor();
  visitor.visit(tree);
  let printables = visitor.getPrintables();
  let defineErrors = visitor.getDefineErrors();
  let alertInvocations = visitor.getAlertInvocations();


  const pushQueue = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setCode(codeQueue);
  }
  
  const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");

  return (
    <Container>
  <Editor
    value={codeQueue}
    onValueChange={code => setCodeQueue(code)}
    highlight={code => hightlightWithLineNumbers(code, languages.js)}
    padding={10}
    className="editor"
    />

    <CompileButton onClick={()=>pushQueue()}>
      Interpret
    </CompileButton>

    <Terminal>
      {printables.map((printable, index) => {
        return <TerminalLine type={printable.type} key={index}>{printable}</TerminalLine>
      })}

      {parserErrorListener.errorMessages.map((error, index) => {
        return <TerminalLine type={'err'} key={index}>PARSER ERROR: {error}</TerminalLine>
      })}

      {lexerErrorListener.errorMessages.map((error, index) => {
        return <TerminalLine type={'err'} key={index}>LEXER ERROR: {error}</TerminalLine>
      })}

      {defineErrors.map((error, index) => {
          return <TerminalLine type={'err'} key={index}>{error}</TerminalLine>
        })
      }
      {alertInvocations.map((alertInvocation, index) => {
          return <TerminalLine type={'alert'} key={index}>{alertInvocation}</TerminalLine>
        })
      }
      
    </Terminal>
</Container>  
);
}

const Container = styled.div`
  display:flex;
  width:100%;
  position:relative;
  & > div{
    width:50%;
    
  }
`
const CompileButton = styled.button`
  position:absolute;
  bottom:0;
  background:green;
  color:white;
  width:20%;
  height:5%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`


export default App;
