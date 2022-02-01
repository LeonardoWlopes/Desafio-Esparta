import React from "react";
import * as S from "./styles";

//Interfaces
type props = {
  nome: string;
  estado: string;
  pais: string;
};

export default function CardSearch({ nome, estado, pais }: props) {
  return (
    <S.Container>
      <S.Name>
        {nome}, {estado}
      </S.Name>
      <S.Estado>{pais}</S.Estado>

      <S.Button onPress={()=> {}} >
        <S.Buttontext>Adicionar</S.Buttontext>
      </S.Button>
    </S.Container>
  );
}
