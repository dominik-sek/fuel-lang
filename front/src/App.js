import './App.css';
import Editor from 'react-simple-code-editor';
import React, { useState, useEffect } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { FireLexer } from './parser/FireLexer.ts'
import { FireParser } from './parser/FireParser.ts'
import  Visitor  from './parser/FireVisitor';

let codeString = `
`

function App() {
  const [code, setCode] = useState(codeString);
  let chars = new ANTLRInputStream(code);
  let lexer = new FireLexer(chars);
  let tokens  = new CommonTokenStream(lexer);
  let parser = new FireParser(tokens);
  parser.buildParseTrees = true;
  let tree = parser.compilationUnit();
  let visitor = new Visitor();
  tree.accept(visitor);


  return (
    <>
  <Editor
    value={code}
    onValueChange={code => setCode(code)}
    highlight={code => highlight(code, languages.js)}
    padding={10}
    style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        }}
    
    />

    </>
  );
}

export default App;
