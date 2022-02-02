import React, { useContext, useEffect, memo, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { APIkey } from "../../../utils/constantes";

//Navigation
import { useNavigation } from "@react-navigation/native";

//context
import { HomeContext } from "../../../contexts/HomeContext";

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
import { TouchableOpacity } from "react-native";

function CardFavorito({ cidade }: props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [clima, setClima] = useState<IClima | null>(null);
  const { favList, setFavlist } = useContext(HomeContext);

  //Navigation
  const navigation = useNavigation();

  //Move para a cidade selecionada
  function moveToCity() {
    navigation.navigate("Cidade" as never, { cidade: cidade } as never);
  }

  //Adiciona e remove a cidade como favorito
  function addAndRemoveCityToFavorite() {
    let newFavList: any = favList?.map((item) => {
      if (item.lat === cidade.lat) {
        let newItem = item;
        newItem.favorited = !item.favorited;
        return newItem;
      } else {
        return item;
      }
    });
    !!newFavList && setFavlist(newFavList);
  }

  //Busca os dados da cidade na API
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
            <TouchableOpacity onPress={addAndRemoveCityToFavorite}>
              <AntDesign
                name={cidade.favorited ? "heart" : "hearto"}
                size={24}
                color="#ED0952"
              />
            </TouchableOpacity>
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
