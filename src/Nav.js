import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Nav = props => (
  <View style={styles.nav}>
    <Text style={styles.navText}>{props.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    paddingTop: 40,
    fontSize: 30,
    fontWeight: "bold",
  },
  navText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
});

export default Nav;
