import React, { useContext } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";

//components
import CardSearch from "../../components/Cards/Search";
import { SearchContext } from "../../contexts/SearchContext";

export default function Home() {
  const { isSearchVisible, searchCidade } = useContext(SearchContext);

  //Lista a ser mostrada quando a barra de pesquisa esta ativada
  function SearchList() {
    return (
      <S.Container>
        <FlatList
          data={searchCidade}
          renderItem={({ item, index }) => (
            <CardSearch
              nome={item.name}
              estado={item.state}
              pais={item.country}
            />
          )}
          keyExtractor={() => Math.random().toString()}
        />
      </S.Container>
    );
  }

  //Lista padrão da home
  function HomeList() {
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

  if (isSearchVisible && !!searchCidade) {
    return <SearchList />;
  } else {
    return <HomeList />;
  }
}
