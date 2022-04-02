import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const TerminalLine = (props) => {
    const [type, setType] = useState(props.children.type);
    console.log(props.children)
    return (
        <Container>
            <p>{props.children.name} = </p>
            {
                JSON.stringify(props.children.values, null, '\t')
            }

        </Container>
     );
}

const Container = styled.div`
    padding:10px;
    border-bottom:1px solid white;
    background:black;
    color:greenyellow;
`;
export default TerminalLine;