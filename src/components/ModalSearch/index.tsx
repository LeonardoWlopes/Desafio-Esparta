import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal,  } from "react-native";
import * as S from "./styles";

//interfaces
type props = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

export default function ModalSearch({
  isModalVisible,
  setIsModalVisible,
}: props) {
  true;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}
    >
      <S.Container>

      </S.Container>
    </Modal>
  );
}
