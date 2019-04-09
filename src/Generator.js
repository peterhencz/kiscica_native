import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";

const Generate = props => {
  return (
    <TouchableWithoutFeedback onPress={() => props.add()}>
      <View style={styles.generate}>
        <Text style={styles.generateText}>0123</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  generate: {
    backgroundColor: "#00cdd4",
    alignItems: "center",
    paddingTop: 10,
    width: "100%",
  },
  generateText: {
    fontSize: 30,
    color: "#fff",
  },
});

export default Generate;
