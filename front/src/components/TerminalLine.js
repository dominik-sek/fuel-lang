import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const TerminalLine = (props) => {
    const [type, setType] = useState(props.type);
    return (
        <Container type={type}>
            {
                type === 'err' ?
                (<p>{props.children}</p>)
                :
                (<p>{props.children.name } {JSON.stringify(props.children.values, null, '\t')}</p>)

            }
        </Container>
     );
}

const Container = styled.div`
    padding:10px;
    border-bottom:1px solid white;
    background:black;
    color:${props => props.type === 'err' ? 'red' : 'greenyellow'};
`;
export default TerminalLine;