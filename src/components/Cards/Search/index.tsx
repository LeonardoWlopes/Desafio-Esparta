import React, { useContext, useEffect, memo } from "react";
import * as S from "./styles";

//context
import { HomeContext } from "../../../contexts/HomeContext";
import { SearchContext } from "../../../contexts/SearchContext";

//Interfaces
type props = {
  cidade: ICidades;
};
import { ICidades } from "../../../interfaces/cidade.interface";

function CardSearch({ cidade }: props) {
  const { homeList, setHomeList } = useContext(HomeContext);
  const { setSearchQuery, setIsSearchVisible } = useContext(SearchContext);

  //Adiciona uma cidade para a lista da home
  function addCityToHomeList() {
    const alreadyExists = homeList?.findIndex(
      (item) => item.lat === cidade.lat
    );

    const newCidade = { ...cidade, favorited: false };

    if (!!homeList) {
      const newCarrinho = [...homeList, newCidade];

      alreadyExists == -1 && setHomeList(newCarrinho);
    } else {
      setHomeList([newCidade]);
    }

    setSearchQuery("");
    setTimeout(() => setIsSearchVisible(false), 200);
  }

  return (
    <S.Container onPress={addCityToHomeList}>
      <S.Name>
        {cidade.name}, {cidade.state}
      </S.Name>
      <S.Estado>{cidade.country}</S.Estado>

      <S.Button onPress={addCityToHomeList}>
        <S.Buttontext>Adicionar</S.Buttontext>
      </S.Button>
    </S.Container>
  );
}

export default memo(CardSearch);
