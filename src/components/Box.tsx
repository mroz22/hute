import styled from 'styled-components';

export const Wrapper = styled.div<{resolved?: boolean}>`
    width: 98%;
    background-color: ${(props) => props.resolved ? 'green' : 'initial'}
`;

export const Name = styled.div`
    border: 1px dashed gray;
    display: flex;
    justify-content: space-between;
`;

export const Body = styled.div`
    border: 1px dashed gray;
    padding: 8px 0;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;