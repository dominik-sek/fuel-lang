import styled from 'styled-components';
const Terminal = (params) => {
    return (
        <TerminalContainer>
            {params.children}
        </TerminalContainer>
        );
}
 
const TerminalContainer = styled.div`
    background:black;
    color:greenyellow;
`

export default Terminal;