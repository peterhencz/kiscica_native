import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Nav = props => (
  <View style={styles.nav}>
    <Text style={styles.navText}>{props.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 10,
    width: "100%",
  },
  navText: {
    fontSize: 30,
    color: "red",
  },
});

export default Nav;
