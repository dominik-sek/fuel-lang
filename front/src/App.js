import './App.css';
import Editor from 'react-simple-code-editor';
import React, { useState, useEffect } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import parseInput from './parser/test.js';

let codeString = `
function(a+b){
    return a+b;
}`

function App() {
  const [code, setCode] = useState(codeString);

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
