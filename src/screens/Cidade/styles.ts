import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundColor};
  align-items: center;
`;

export const SubTitle = styled.Text`
  width: 190px;
  height: 16px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-align: center;
  margin-top: 8px;
`;
