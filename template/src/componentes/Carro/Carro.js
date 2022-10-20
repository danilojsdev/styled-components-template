import { CarroContainer, CarroImagem, Imagem, CarroUl } from "./style";

export function Carro(props) {
    return (
      <CarroContainer>
        <h2>Meu carro</h2>
        <CarroImagem src="https://autos.yahoo.com.tw/p/r/w1200/car-trim/July2021/3a1b97ee2d1aa609583047b7ff43c638.jpeg"/>
        <CarroUl>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex ? "true" : "false"}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </CarroUl>
      </CarroContainer>
    );
  }
  