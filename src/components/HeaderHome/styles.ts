import styled from "styled-components/native";

import { colors } from "../../styles/colors";

export const StatusBar = styled.View`
  width: 100%;
  height: 20px;
  background-color: ${colors.azure};
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${colors.azure};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.HeaderColor};
`;
export const Search = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.HeaderColor};
  width: 80%;
`;

export const Flag = styled.Image`
  width: 35px;
  height: 35px;
`;
