import React, { useContext } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";

//components
import CardSearch from "../../components/Cards/Search";
import CardFavorito from "../../components/Cards/Favorito";

//contexts
import { SearchContext } from "../../contexts/SearchContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export default function Home() {
  const { isSearchVisible, searchCidade } = useContext(SearchContext);
  const { favList } = useContext(FavoritesContext);

  //Lista a ser mostrada quando a barra de pesquisa esta ativada
  function SearchList() {
    return (
      <S.Container>
        <FlatList
          data={searchCidade}
          renderItem={({ item, index }) => <CardSearch cidade={item} />}
          keyExtractor={() => Math.random().toString()}
        />
      </S.Container>
    );
  }

  //Lista padrão da home
  function HomeList() {
    return !favList ? (
      <S.Container>
        <S.HomeTitle>
          Parece que você ainda não adicionou uma cidade
        </S.HomeTitle>
        <S.HomeSubTitle>
          Tente adicionar uma cidade usando o botão de busca
        </S.HomeSubTitle>
      </S.Container>
    ) : (
      <S.Container>
        <FlatList
          data={favList}
          renderItem={({ item, index }) => <CardFavorito cidade={item} />}
          keyExtractor={() => Math.random().toString()}
        />
      </S.Container>
    );
  }

  if (isSearchVisible && !!searchCidade) {
    return <SearchList />;
  } else {
    return <HomeList />;
  }
}
