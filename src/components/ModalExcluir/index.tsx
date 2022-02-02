import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

//Context
import { HomeContext } from "../../contexts/HomeContext";

//interfaces
type props = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  lat: number;
};

export default function ModalExcluir({
  modalVisible,
  setModalVisible,
  lat,
}: props) {
  const { favList, setFavlist } = useContext(HomeContext);

  function handleRemoveItem() {
    const newFavList = favList?.filter((item) => item.lat !== lat);
    !!newFavList && setFavlist(newFavList);
  }

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Excluir Cidade ?</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleRemoveItem}
            >
              <Text style={styles.textStyle}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 200,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
    marginBottom: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
