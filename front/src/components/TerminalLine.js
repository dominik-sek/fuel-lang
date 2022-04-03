import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const TerminalLine = (props) => {
    const [type, setType] = useState(props.type);
    const filterByType = (type) => {
        switch(type){
            case "err":
                return <span>{props.children}</span>
            case "string":
                return <span>{props.children.value}</span>
            default:
                return <span>{props.children.name} {JSON.stringify(props.children.values, null, '\t')}</span>
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
    background:black;
    padding-left:5ch;
    color:${props => props.type === 'err' ? 'red' : 'greenyellow'};
    position: relative;
    &::before{
        content: '${props => props.type === 'err' ? 'err >' : 'out >'}';
        color:${props => props.type === 'err' ? 'red' : 'white'};
        position:absolute;
        left:0;
        top:0;        
    }
`;
export default TerminalLine;