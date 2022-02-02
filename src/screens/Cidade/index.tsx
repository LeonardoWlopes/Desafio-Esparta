import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";

//Components
import HeaderCity from "../../components/HeaderCity";
import { FlatList } from "react-native";
import CardFavorito from "../../components/Cards/Favorito";

//interfaces
import { ICidadesSearch } from "../../interfaces/cidadeSearch.interface";

type props = {
  route: any;
};

export default function Cidade({ route }: props) {
  const [climas, setClimas] = useState();

  const cidade: ICidadesSearch = route.params.cidade;

  /*useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${cidade.lat}&lon=${cidade.lon}&appid=${APIkey}&lang=pt_br&units=metric`
      )
      .then((res) => {
        setClimas(res.data);
      });
  }, []);*/

  return (
    <HeaderCity nome={cidade.name}>
      <S.Container>
        <S.SubTitle>Previsão para os próximos 5 dias</S.SubTitle>
      </S.Container>
    </HeaderCity>
  );
}
