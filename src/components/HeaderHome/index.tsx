import React, { ReactNode, useContext, useState } from "react";
import * as S from "./styles";
import { colors } from "../../styles/colors";

//components
import { Octicons } from "@expo/vector-icons";
import { SearchContext } from "../../contexts/SearchContext";

//Interaces
type props = {
  children: ReactNode;
};

export default function HeaderHome({ children }: props) {
  const { searchQuery, setSearchQuery, isSearchVisible, setIsSearchVisible } =
    useContext(SearchContext);

  return (
    <>
      <S.StatusBar />

      <S.Header>
        {isSearchVisible && (
          <Octicons
            name="x"
            size={24}
            color={colors.HeaderColor}
            onPress={() => setIsSearchVisible(!isSearchVisible)}
          />
        )}
        {!isSearchVisible ? (
          <S.Title>Cidades</S.Title>
        ) : (
          <S.Search
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholder="Digite o nome da cidade"
            placeholderTextColor={colors.HeaderColor}
            keyboardType="default"
          />
        )}
        {!isSearchVisible && (
          <Octicons
            name="search"
            size={24}
            color={colors.HeaderColor}
            onPress={() => setIsSearchVisible(!isSearchVisible)}
          />
        )}
      </S.Header>
      {children}
    </>
  );
}
