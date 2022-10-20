import styled from "styled-components";

export const Botao = styled.button`
    background: lightblue;
    color: black;
    border: 1px solid #eee;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    text-shadow: none;
    width: 10vw;
    height: 10vh;
    margin: 0.5rem;
`;

export const GaragemContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const Estacionamento = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
`;