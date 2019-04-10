import React, { Component } from "react";
import { Text, StyleSheet, View, Button, Modal } from "react-native";

class ModalComponent extends Component {
  state = {
    modal: false,
  };
  handleModal = () => {
    this.setState({
      modal: !this.state.modal ? true : false,
    });
  };
  render() {
    return (
      <View style={{ width: "100%" }}>
        <Button title="open" onPress={this.handleModal} />
        <Modal visible={this.state.modal} animationType="slide">
          <View style={{ marginTop: 50, backgroundColor: "#f4baba" }}>
            <Text>yolo</Text>
          </View>
          <Button title="close" onPress={this.handleModal} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ModalComponent;
