import './App.css';
import Editor from 'react-simple-code-editor';
import Terminal from './components/Terminal';
import React, { useState, useEffect } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import "prismjs/themes/prism-dark.css";
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { FireLexer } from './parser/FireLexer.ts'
import { FireParser } from './parser/FireParser.ts'
import  Visitor  from './parser/Visitor.ts';
import styled from 'styled-components';
import TerminalLine from './components/TerminalLine';
import {FireErrorListener} from './parser/FireErrorListener.ts';

let codeString = ``;
let codeQueueString = ``;



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

  const focusTextArea = () => {
    document.getElementsByTagName('textarea')[0].focus();
  }

  const clear = () => {
    setCode(``);
    setCodeQueue(``);
  }
  const importFile = () => {
    clear();
    document.getElementById('getFile').value = null;
    document.getElementById('getFile').click();
  }
  const pushQueue = () => {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    setCode(codeQueue);
  }
  
  const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");

  return (
    <Container>
      <ButtonWrapper>
      <RunButton onClick={()=>pushQueue()}>
      Run
      </RunButton>

      <RunButton onClick={()=>clear()}>
        Clear
      </RunButton>
      
      
      <RunButton onClick={()=>importFile()}>
      Import from file
      <input type="file" id="getFile" onChange={(e)=>{
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
          setCodeQueue(e.target.result);
        }
        reader.readAsText(file);
      }
      }

      style={{display:'none'}}/>
      </RunButton>

      </ButtonWrapper>

      <EditorWrapper onClick={()=>focusTextArea()}>

          <Editor
            value={codeQueue}
            onValueChange={code => setCodeQueue(code)}
            highlight={code => hightlightWithLineNumbers(code, languages.js)}
            className={`language-javascript editor`}
            />
    </EditorWrapper>




    <Terminal id="terminal" >
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
  flex-direction: column;
  min-height:100%;
  height:100vh;
  & > div{
    width:100%;
  }
`
const RunButton = styled.button`
  top:0;
  background:green;
  color:white;
  width:20%;
  height:100%;
  cursor: pointer;
`
const ButtonWrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  height:5%;
  min-height: 5%;
  width:100%;
  background-color:rgb(44, 46, 47);
  `;
const EditorWrapper = styled.div`
  height:65%;
  min-height: 65%;
  width: 100%;
  overflow-y: scroll;
  background-color: black;
  cursor: text;
`

export default App;
