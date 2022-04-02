import styled from 'styled-components';
const Terminal = (props) => {
    return (
        <TerminalContainer>
            {props.children}
        </TerminalContainer>
        );
}
 
const TerminalContainer = styled.div`
    background:black;
    color:greenyellow;
`


export default Terminal;