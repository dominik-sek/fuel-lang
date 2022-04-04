import styled from 'styled-components';
const Terminal = (props) => {
    return (
        <TerminalWrapper>
        <TerminalContainer id={props.id}>
            
            {props.children}
        </TerminalContainer>
        </TerminalWrapper>
        );
}
 
const TerminalContainer = styled.div`
    background:black;
    color:greenyellow;
    height:100%;
    min-height:100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column-reverse;
    border-top: 5px solid white;

`
const TerminalWrapper = styled.div`
    height:30%;
    min-height:30%;
    overflow-y: scroll;
`;

export default Terminal;