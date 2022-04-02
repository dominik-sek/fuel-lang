import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const TerminalLine = (props) => {
    const [type, setType] = useState(props.children.type);
    console.log(props.children)
    return (
        <Container type={type}>
            {
                <p>{props.children.name } {JSON.stringify(props.children.values, null, '\t')}</p>
            }
        </Container>
     );
}

const Container = styled.div`
    padding:10px;
    border-bottom:1px solid white;
    background:black;
    color:${props => props.type === 'error' ? 'red' : 'greenyellow'};
`;
export default TerminalLine;