import React, { memo, useContext } from "react";
import * as S from "./styles";

//contexts
import { SearchContext } from "../../../contexts/SearchContext";

//Interfaces
type props = {
  data: IDias;
  index: number;
};

function CardForecast({ data, index }: props) {
  const { language } = useContext(SearchContext);

  var dayNames: any = [];
  var todayTomorrow: any = [];
  var monNames: any = [];

  if (language === "pt-br") {
    dayNames = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
      "Domingo",
    ];

    monNames = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "Maio",
      "junho",
      "Julho",
      "agosto",
      "Setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    todayTomorrow = ["Hoje", "Amanha"];
  } else {
    dayNames = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
      "Domingo",
    ];

    monNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    todayTomorrow = ["Today", "Tomorrow"];
  }

  //passa a data de string para timestamp
  const stringToDate = Date.parse(data.dt_txt.substring(0, 10));

  return (
    <S.Container>
      <S.Left>
        <S.Name>
          {index > 1
            ? dayNames[new Date(stringToDate).getDay() + 1]
            : todayTomorrow[index]}
        </S.Name>

        {language === "pt-br" ? (
          <S.Estado>
            {data.dt_txt.substring(8, 10)} de {""}
            {monNames[new Date(stringToDate).getMonth()]}
          </S.Estado>
        ) : (
          <S.Estado>
            {monNames[new Date(stringToDate).getMonth()]} {""}
            {data.dt_txt.substring(8, 10)}
          </S.Estado>
        )}

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
