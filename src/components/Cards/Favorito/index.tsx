import React, { useContext, useEffect, memo, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { APIkey } from "../../../utils/constantes";

//Navigation
import { useNavigation } from "@react-navigation/native";

//context
import { HomeContext } from "../../../contexts/HomeContext";
import { SearchContext } from "../../../contexts/SearchContext";

//Interfaces
type props = {
  cidade: ICidades;
};
import { ICidades } from "../../../interfaces/cidade.interface";
import { IClima } from "../../../interfaces/clima.interface";

//components
import { AntDesign } from "@expo/vector-icons";
import ModalExcluir from "../../ModalExcluir";
import AppLoading from "expo-app-loading";

function CardFavorito({ cidade }: props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [clima, setClima] = useState<IClima | null>(null);

  //Navigation
  const navigation = useNavigation();

  //Move para a cidade selecionada
  function moveToCity() {
    navigation.navigate("Cidade" as never, { cidade: cidade } as never);
  }

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${cidade.lat}&lon=${cidade.lon}&appid=${APIkey}&lang=pt_br&units=metric`
      )
      .then((res) => {
        setClima(res.data);
      });
  }, []);
 
  return (
    <S.Container onPress={moveToCity} onLongPress={() => setModalVisible(true)}>
      {!!clima ? (
        <>
          <S.Left>
            <S.Name>{cidade.name}</S.Name>
            <S.Estado>{cidade.country}</S.Estado>

            <S.Clima>{clima?.weather[0].description}</S.Clima>
            <S.MinMax>
              {clima?.main.temp_min.toFixed()}&#176; -{" "}
              {clima?.main.temp_max.toFixed()}&#176;
            </S.MinMax>
          </S.Left>
          <S.Right>
            <S.MainTemp>{clima?.main.temp.toFixed()}&#176;</S.MainTemp>
            <AntDesign
              name="hearto"
              size={24}
              color="#ED0952"
              onPress={() => console.log("re")}
            />
          </S.Right>
        </>
      ) : (
        <AppLoading /> 
      )}
      <ModalExcluir
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        lat={cidade.lat}
      />
    </S.Container>
  );
}

export default memo(CardFavorito);
