import React, { useContext, useEffect, memo, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { APIkey } from "../../../../utils/constantes";

//context
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import { SearchContext } from "../../../contexts/SearchContext";

//Interfaces
type props = {
  cidade: ICidadesSearch;
};
import { ICidadesSearch } from "../../../interfaces/cidadeSearch.interface";
import { IClima } from "../../../interfaces/clima.interface";

function CardFavorito({ cidade }: props) {
  const { favList, setFavlist } = useContext(FavoritesContext);
  const { setSearchQuery, setIsSearchVisible } = useContext(SearchContext);

  const [clima, setClima] = useState<IClima>({
    coord: { lon: -47.6054, lat: -21.2067 },
    weather: [{ id: 804, main: "Clouds", description: "nublado", icon: "04d" }],
    base: "stations",
    main: {
      temp: 25.79,
      feels_like: 26.33,
      temp_min: 25.79,
      temp_max: 25.79,
      pressure: 1013,
      humidity: 73,
    },
    visibility: 10000,
    wind: { speed: 2.57, deg: 270 },
    clouds: { all: 100 },
    dt: 1643743427,
    sys: {
      type: 1,
      id: 8428,
      country: "BR",
      sunrise: 1643705569,
      sunset: 1643752505,
    },
    timezone: -10800,
    id: 3447720,
    name: "Serrana",
    cod: 200,
  });

  useEffect(() => {
    // axios
    //   .get(
    //     `http://api.openweathermap.org/data/2.5/weather?lat=${cidade.lat}&lon=${cidade.lon}&appid=${APIkey}&lang=pt_br&units=metric`
    //   )
    //   .then((res) => {
    //     setClima(res.data);
    //   });
  }, []);

  return (
    <S.Container>
      <S.Left>
        <S.Name>{cidade.name}</S.Name>
        <S.Estado>{cidade.country}</S.Estado>

        <S.Clima>{clima.weather[0].description}</S.Clima>
        <S.MinMax>
          {clima.main.temp_min.toFixed()}&#176; -{" "}
          {clima.main.temp_max.toFixed()}&#176;
        </S.MinMax>
      </S.Left>
      <S.Right>
        <S.MainTemp>{clima.main.temp.toFixed()}&#176;</S.MainTemp>
      </S.Right>
    </S.Container>
  );
}

export default memo(CardFavorito);
