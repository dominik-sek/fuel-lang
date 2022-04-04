import './App.css';
import Editor from 'react-simple-code-editor';
import Terminal from './components/Terminal';
import React, { useState } from 'react';
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
import Docs from './components/Docs';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let codeString = ``;
let codeQueueString = ``;
let codeSample = `    
ENT KONTENER_0001 = {
  "entity_type": "Kontener",
  "entitiy_name": "Kontener nr1"
}

ENT KONTENER_0002 = {
  "entity_type": "Kontener",
  "entitiy_name": "Kontener nr2"
}

ENT CZUJNIK_0001 = {
  "entity_type": "Czujnik",
  "entitiy_name": "Czujnik nr1"
}

ENT CZUJNIK_0002 = {
  "entity_type": "Czujnik",
  "entitiy_name": "Czujnik nr2"
}

ENT PALIWO_0001 = {
  "entity_type": "Paliwo",
  "entitiy_name": "Paliwo nr1"
}
ENT PALIWO_0002 = {
  "entity_type": "Paliwo",
  "entitiy_name": "Paliwo nr2"
}

REL CZUJNIK_0001 => KONTENER_0001 as REL_0001 = {
  "name": "Czujnik1 znajduje sie w Kontenerze 1",
  "state": "active"
}
REL CZUJNIK_0002 => KONTENER_0002 as REL_0002 = {
  "name": "Czujnik 2 znajduje sie w Kontenerze 2",
  "state": "active"
}

REL PALIWO_0001 => KONTENER_0001 as REL_0003 = {
  "name": "Paliwo 1 znajduje sie w Kontenerze 1",
  "state": "active"
}
REL PALIWO_0002 => KONTENER_0002 as REL_0004= {
  "name": "Paliwo 2 znajduje sie w Kontenerze 2",
  "state": "active"
}

ACT POMIAR_TEMPERATURY_0001 = {
  "type":"pomiar temperatury",
  "result":"40",
  "entity": "CZUJNIK_0001"
}

ACT POMIAR_TEMPERATURY_0002 = {
  "type":"pomiar temperatury",
  "result":"25",
  "entity": "CZUJNIK_0002"
}

EVT ALERT_0001 = {
  "name":"alert nr1 najwyzszy stopien zagrozenia",
  "goal":"powiadom ochrone, straz pozarna, wojsko",
  "location": "ul. Warszawska 15A, 42-200 Częstochowa, I piętro, pierwszy kontener od okna",
  "subject": "CZUJNIK_0001",
  "state": "active"
}

EVT ALERT_0002 = {
  "name":"alert nr2 sredni stopien zagrozenia",
  "gal":"powiadom ochrone",
  "location": "ul. Warszawska 15A, 42-200 Częstochowa, I piętro, pierwszy kontener od okna",
  "subject": "CZUJNIK_0002",
  "state": "active"
}

let entities = [KONTENER_0001, KONTENER_0002, CZUJNIK_0001, CZUJNIK_0002, PALIWO_0001, PALIWO_0002]
let relations = [REL_0001,REL_0002,REL_0003,REL_0004]
let activities = [POMIAR_TEMPERATURY_0001, POMIAR_TEMPERATURY_0002]
let events = [ALERT_0001, ALERT_0002]


IF POMIAR_TEMPERATURY_0001.result > 30
DO ALERT_0001.goal

IF POMIAR_TEMPERATURY_0002.result >= 25
DO ALERT_0002.goal
`;



function App() {

  const [code, setCode] = useState(codeString);
  const [codeQueue, setCodeQueue] = useState(codeQueueString);
  const [openDocs, setOpenDocs] = React.useState(false);
  const handleOpen = () => setOpenDocs(true);
  const handleClose = () => setOpenDocs(false);  

  let version = '0.0.7';
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

  const importSample = () =>{
    setCodeQueue(codeSample);
    focusTextArea();
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

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      height: 800,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      overflow: 'scroll',
    };
  return (
    <Container>
      <Modal
        open={openDocs}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{overflow:'scroll'}}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Documentation
          </Typography>
          <Docs />
        </Box>
      </Modal>

      

      <ButtonWrapper>
      <p style={{color:'white'}}>ver: {version}</p>

      <Button variant="contained" color="success" style={{width:'10%', height:'80%'}} onClick={()=>pushQueue()}>
      Run
      </Button>

      <Button variant="contained" color="error"  onClick={()=>clear()}>
        Clear
      </Button>
      
      <Button variant="contained" color="primary"  onClick={()=>importSample()}>
        Import Sample
      </Button>
      
      <Button variant="contained" color="success"onClick={()=>importFile()}>
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
      </Button>

      <Button variant="outlined"  onClick={handleOpen}>
        Documentation
      </Button>

      </ButtonWrapper>

      <EditorWrapper onClick={()=>focusTextArea()}>

          <Editor
            value={codeQueue}
            onValueChange={code => setCodeQueue(code)}
            highlight={code => hightlightWithLineNumbers(code, languages.js)}
            className={`language-javascript editor`}
            />
    </EditorWrapper>


      <p className='terminal-line' />

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
  && .terminal-line{
    width: 100%;
    background-color: white;
    margin:1px 1px;
  }
`

const ButtonWrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height:5%;
  min-height: 5%;
  width:100%;
  background-color:rgb(0, 30, 60);
  border-bottom: 1px solid white;
  
    & > button{
      margin:0px 5px;
      width:10%;
      height:80%;
    }
  `;
const EditorWrapper = styled.div`
  height:65%;
  min-height: 65%;
  width: 100%;
  overflow-y: scroll;
  background-color: #0A1929;
  cursor: text;
`

export default App;
