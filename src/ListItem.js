import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const ListItem = props => {
  return <View style={styles.listItem} />;
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

export default ListItem;
