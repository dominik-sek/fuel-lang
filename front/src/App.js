import './App.css';
import Editor from 'react-simple-code-editor';
import Terminal from './components/Terminal';
import React, { useState, useEffect } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { FireLexer } from './parser/FireLexer.ts'
import { FireParser } from './parser/FireParser.ts'
import  Visitor  from './parser/FireVisitor';
import styled from 'styled-components';

let codeString = ``;
let codeQueueString = ``;


function App() {
  const [code, setCode] = useState(codeString);
  const [codeQueue, setCodeQueue] = useState(codeQueueString);
  const pushQueue = () => {
    setCode(codeQueue);
  }

  let chars = new ANTLRInputStream(code);
  let lexer = new FireLexer(chars);
  let tokens  = new CommonTokenStream(lexer);
  let parser = new FireParser(tokens);
  parser.buildParseTrees = true;
  let tree = parser.compilationUnit();
  let visitor = new Visitor();
  
  tree.accept(visitor);
  let printables = visitor.getPrintables();
  console.log(printables)
  return (
    <Container>
  <Editor
    value={codeQueue}
    onValueChange={code => setCodeQueue(code)}
    highlight={code => highlight(code, languages.js)}
    padding={10}
    className="terminal-editor"
    />

    <CompileButton onClick={()=>pushQueue()}>
      Compile
    </CompileButton>

    <Terminal>
      {printables.map((printable, index) => {
        for(let key in printable){
          return <p key={index}>{key}: {printable[key]}</p>
        }
        })}
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
