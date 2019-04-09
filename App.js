import React, { Component } from "react";
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

import Nav from "./src/Nav";
import Generator from "./src/Generator";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends Component {
  state = {
    nameOfApp: "kiscica",
    random: ["😶", "💥", "🍻", "🛸"],
    w: 100,
    h: 100,
    fontSize: 60,
  };

  onAddRandom = () => {
    alert("add random");
  };
  _onPress = () => {
    LayoutAnimation.spring();
    this.setState({ fontSize: this.state.fontSize + 20 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Nav name={this.state.nameOfApp} />
        <View style={styles.button} />
        <TouchableOpacity onPress={this._onPress}>
          <Text style={(styles.box, { fontSize: this.state.fontSize })}>
            🐱
          </Text>
        </TouchableOpacity>
        <Generator add={this.onAddRandom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4baba",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    margin: 10,
  },
  cica: {
    fontSize: 60,
  },
});

export default App;
