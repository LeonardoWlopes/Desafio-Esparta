import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../styles/colors";

export const Container = styled.View`
  width: 328px;
  height: 130px;
  background-color: ${colors.cardColor};
  margin: 8px 0px;
  padding: 15px 16px;
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.78);
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

export const Buttontext = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  margin-top: 4px;
  width: 108px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  color: #0078be;
`;

export const Button = styled.TouchableOpacity`
  margin-top: auto;
  width: 110px;
`;
