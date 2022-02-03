import React, { ReactNode, useContext, useState } from "react";
import * as S from "./styles";
import { colors } from "../../styles/colors";

//components
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//Interaces
type props = {
  children: ReactNode;
  nome: string;
};

export default function HeaderCity({ children, nome }: props) {
  //Volta para tela Home
  const navigation = useNavigation();
  function moveToHome() {
    navigation.goBack();
  }

  return (
    <>
      <S.StatusBar />
      <S.Header>
        <Feather
          name="chevron-left"
          size={32}
          color={colors.HeaderColor}
          onPress={moveToHome}
        />

        <S.Title>{nome}</S.Title>
      </S.Header>
      {children}
    </>
  );
}
