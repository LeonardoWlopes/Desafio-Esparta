import React, { useContext, useEffect, memo } from "react";
import * as S from "./styles";

//context
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import { SearchContext } from "../../../contexts/SearchContext";

//Interfaces
type props = {
  cidade: ICidadesSearch;
};
import { ICidadesSearch } from "../../../interfaces/cidadeSearch.interface";

function CardSearch({ cidade }: props) {
  const { favList, setFavlist } = useContext(FavoritesContext);
  const { setSearchQuery, setIsSearchVisible } = useContext(SearchContext);

  function addCityToFavotites() {
    const alreadyExists = favList?.findIndex((item) => item.lat === cidade.lat);

    if (!!favList) {
      const newCarrinho = [...favList, cidade];

      alreadyExists == -1 && setFavlist(newCarrinho);
    } else {
      setFavlist([cidade]);
    }

    setSearchQuery("");
    setIsSearchVisible(false);
  }

  return (
    <S.Container>
      <S.Name>
        {cidade.name}, {cidade.state}
      </S.Name>
      <S.Estado>{cidade.country}</S.Estado>

      <S.Button onPress={addCityToFavotites}>
        <S.Buttontext>Adicionar</S.Buttontext>
      </S.Button>
    </S.Container>
  );
}

export default memo(CardSearch);
