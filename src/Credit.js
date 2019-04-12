import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class CreditScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f4baba",
        }}>
        <Text
          style={{ color: "white", fontSize: 260 }}
          onPress={() => alert("miau")}>
          YOLO
        </Text>
      </View>
    );
  }
}

export default CreditScreen;
