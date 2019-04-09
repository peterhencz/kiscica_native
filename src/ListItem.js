import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const ListItem = props => {
  return <View style={styles.listItem} />;
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#bcbcbc",
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
