import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundColor};
  align-items: center;
`;

export const HomeTitle = styled.Text`
  width: 300px;
  height: 48px;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0.25px;
  text-align: center;
  color: black;
  margin: 70px auto 16px auto;
`;

export const HomeSubTitle = styled.Text`
  width: auto;
  padding: 0px 8px;
  height: 48px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin: 12px auto 16px auto;

`;
