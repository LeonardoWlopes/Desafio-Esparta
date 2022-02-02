import React, { memo } from "react";
import * as S from "./styles";

//Interfaces
type props = {
  data: IDias;
  index: number;
};

function CardForecast({ data, index }: props) {
  const dayNames = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    "Domingo",
  ];

  const monNames = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "Maio",
    "junho",
    "agosto",
    "outubro",
    "novembro",
    "dezembro",
  ];

  //Array para hoje e amanha
  const hojeAmanha = ["Hoje", "Amanha"];

  //passa a data de string para timestamp
  const stringToDate = Date.parse(data.dt_txt.substring(0, 10));

  return (
    <S.Container>
      <S.Left>
        <S.Name>
          {index > 1
            ? dayNames[new Date(stringToDate).getDay() + 1]
            : hojeAmanha[index]}
        </S.Name>

        <S.Estado>
          {data.dt_txt.substring(8, 10)} de {""}
          {monNames[new Date(stringToDate).getMonth()]}
        </S.Estado>

        <S.Clima>{data.weather[0].description}</S.Clima>
        <S.MinMax>
          {data.main.temp_min.toFixed()}&#176; - {data.main.temp_max.toFixed()}
          &#176;
        </S.MinMax>
      </S.Left>
      <S.Right>
        <S.MainTemp>{data.main.temp.toFixed()}&#176;</S.MainTemp>
      </S.Right>
    </S.Container>
  );
}

export default memo(CardForecast);
