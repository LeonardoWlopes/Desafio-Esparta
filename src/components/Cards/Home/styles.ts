import styled from "styled-components/native";
import { colors } from "../../../styles/colors";

export const Container = styled.TouchableOpacity`
  width: 328px;
  height: 130px;
  background-color: ${colors.cardColor};
  margin: 8px 0px;
  padding: 15px 16px;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.78);
  display: flex;
  flex-direction: row;
`;

export const Name = styled.Text`
  width: auto;
  height: auto;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
`;

export const Estado = styled.Text`
  width: 296px;
  height: 28px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
`;

export const Left = styled.View`
  width: 70%;
  height: 100%;
`;

export const Clima = styled.Text`
  width: auto;
  height: auto;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${colors.climaColor};
  text-transform: capitalize;
  margin-bottom: 4px;

`;
export const MinMax = styled.Text`
  width: auto;
  height: 16px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: black;
`;

export const Right = styled.View`
  width: 30%;
  height: 100%;
  align-items: flex-end;
  justify-content: space-between;
`;

export const MainTemp = styled.Text`
  width: auto;
  height: auto;
  font-family: Roboto;
  font-size: 34px;
  font-weight: normal;
  font-style: normal;

  color: ${colors.climaColor};
`;
