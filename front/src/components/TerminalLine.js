import styled from 'styled-components';
import React, { useEffect, useState } from 'react';


const TerminalLine = (props) => {
    const [type, setType] = useState('');
    let output = ``;

    useEffect(() =>{
        setType(props.type);
        console.log(props.children.value)
    },[props.type])

    const filterByType = (type) => {
        switch(type){
            case "err":
                return <pre>{props.children}</pre>
            case "string":
                return <pre>{props.children.value}</pre>
            case "number":
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
    return (
        <Container type={type}>
            {
                filterByType(type)
            }
        </Container>
     );
}

const Container = styled.div`
    background:rgb(0,30,60);
    color:${props => {
        switch(props.type){
            case "err":
                return "#d32f2f"
            case "string":
                return "white"
            case "alert":
                return "#d38d2f"
            default:
                return "white"
        }
    }};

    position: relative;
    font-size:1.2em;

    &::before {
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        content:'${props => {
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
    }}'};
    
        color:${props => {
        switch(props.type){
            case "err":
                return "#d32f2f"
            case "string":
                return "white"
            case "alert":
                return "#d38d2f"
            default:
                return "white"
        }
    }};

        font-family: monospace;
        font-size:1.2em;
        display: flex;
        align-items: center;

    }

    & > pre{
        white-space: pre-wrap;
        padding-left: 2ch;
    }
`;
export default TerminalLine;