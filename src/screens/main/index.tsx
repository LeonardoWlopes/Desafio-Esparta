import React, { useContext } from "react";
import * as S from "./styles";

//components
import CardSearch from "../../components/Cards/Search";
import CardFavorito from "../../components/Cards/Favorito";
import { FlatList } from "react-native";
import HeaderHome from "../../components/HeaderHome";

//contexts
import { SearchContext } from "../../contexts/SearchContext";
import { HomeContext } from "../../contexts/HomeContext";

export default function Home() {
  const { isSearchVisible, searchCidade } = useContext(SearchContext);
  const { favList } = useContext(HomeContext);

  //Lista a ser mostrada quando a barra de pesquisa esta ativada
  function SearchList() {
    return (
      <S.Container>
        <FlatList
          data={searchCidade}
          scrollEnabled
          renderItem={({ item, index }) => <CardSearch cidade={item} />}
          contentContainerStyle={{ paddingBottom: 150 }}
          keyExtractor={() => Math.random().toString()}
        />
      </S.Container>
    );
  }

  //Lista padrão da home
  function HomeList() {
    if (!!favList && favList.length > 0) {
      return (
        <S.Container>
          <FlatList
            data={favList}
            scrollEnabled
            renderItem={({ item, index }) => <CardFavorito cidade={item} />}
            contentContainerStyle={{ paddingBottom: 150 }}
            keyExtractor={() => Math.random().toString()}
          />
        </S.Container>
      );
    } else {
      return (
        <S.Container>
          <S.HomeTitle>
            Parece que você ainda não adicionou uma cidade
          </S.HomeTitle>
          <S.HomeSubTitle>
            Tente adicionar uma cidade usando o botão de busca
          </S.HomeSubTitle>
        </S.Container>
      );
    }
  }

  return (
    <HeaderHome>{isSearchVisible ? <SearchList /> : <HomeList />}</HeaderHome>
  );
}
