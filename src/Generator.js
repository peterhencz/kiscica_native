import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";

const Generate = props => {
  return (
    <TouchableWithoutFeedback onPress={() => props.add()}>
      <View style={styles.generate}>
        <Text style={styles.generateText}>🕳</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  generate: {
    marginTop: 600,
    position: "absolute",
    alignItems: "center",
  },
  generateText: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default Generate;
