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
    background:rgb(0,30,60);
    opacity: 90%;
    color:greenyellow;
    height:100%;
    min-height:100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column-reverse;
`
const TerminalWrapper = styled.div`
    height:30%;
    min-height:30%;
    overflow-y: scroll;
`;

export default Terminal;