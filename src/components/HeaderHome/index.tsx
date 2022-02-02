import React, { ReactNode, useContext, useState } from "react";
import * as S from "./styles";
import { colors } from "../../styles/colors";

//components
import { Octicons } from "@expo/vector-icons";
import { SearchContext } from "../../contexts/SearchContext";
import { TouchableOpacity } from "react-native";

//Interaces
type props = {
  children: ReactNode;
};

export default function HeaderHome({ children }: props) {
  const {
    searchQuery,
    setSearchQuery,
    isSearchVisible,
    setIsSearchVisible,
    language,
    setLanguage,
  } = useContext(SearchContext);

  //Muda a unidade de medida
  function handleChangeLanguage() {
    if (language === "pt-br") {
      setLanguage("en");
    }
    if (language === "en") {
      setLanguage("pt-br");
    }
  }

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
          <>
            <S.Title>Cidades</S.Title>
            <TouchableOpacity onPress={handleChangeLanguage}>
              {language === "pt-br" ? (
                <S.Flag source={require("../../assets/brasil.png")} />
              ) : (
                <S.Flag source={require("../../assets/usa.png")} />
              )}
            </TouchableOpacity>
          </>
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
