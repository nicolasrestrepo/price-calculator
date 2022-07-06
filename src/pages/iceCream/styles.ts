import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.625rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 1rem;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 100%;
    padding: 0.625rem;
    margin-top: 1.25rem;
`;
export const Total = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
`;

export const InputsGroup = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 30px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;
`;
