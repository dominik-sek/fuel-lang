import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const TerminalLine = (props) => {
    const [type, setType] = useState(props.type);
    let output = ``;
    console.log(props.children)
    const filterByType = (type) => {
        switch(type){
            case "err":
                return <pre>{props.children}</pre>
            case "string":
                return <pre>{props.children.value}</pre>
            case "alert":
                for(const property in props.children){
                    output += `${property}: ${props.children[property]}`
                    output += `\n`
                }
                return <pre>{output}</pre>
            default:
                return <pre>{props.children.name} {JSON.stringify(props.children.values, null, '\t')}</pre>
        }
    }
    console.log(output)
    return (
        <Container type={type}>
            {
                filterByType(type)
            }
        </Container>
     );
}

const Container = styled.div`
    background:black;
    padding-left:6ch;
    color:${props => {
        switch(props.type){
            case "err":
                return "red"
            case "string":
                return "white"
            case "alert":
                return "yellow"
            default:
                return "white"
        }
    }};
    position: relative;
    font-size:1.2em;
    
    &::before{
        content: ' ${props => {
        switch(props.type){
            case "err":
                return "ERR >"
            case "string":
                return "OUT >"
            case "alert":
                return "EVT >"
            default:
                return "OUT >"
        }
    }}';
        color:${props => {
        switch(props.type){
            case "err":
                return "red"
            case "string":
                return "white"
            case "alert":
                return "yellow"
            default:
                return "white"
        }
    }};
        position:absolute;
        left:0;
        top:0;
        font-family: monospace;
        font-size:1.2em;
    }

`;
export default TerminalLine;