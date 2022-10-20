import styled from "styled-components";

export const CarroContainer = styled.article`
    background-color: orange;
    border-radius: 5px;
    width: 25vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 5px 5px 5px black;
`;

export const CarroImagem = styled.img`
    width: 60%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px black;
`;

export const CarroUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`