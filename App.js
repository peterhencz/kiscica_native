import React, { Component } from "react";
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends Component {
  state = {
    w: 100,
    h: 100,
    fontSize: 60,
  };
  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({ fontSize: this.state.fontSize + 20 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>kiscica</Text>
        <View style={styles.button} />
        <TouchableOpacity onPress={this._onPress}>
          <Text
            // onPress={() => alert("Miau")}
            style={(styles.box, { fontSize: this.state.fontSize })}>
            🐱
          </Text>
        </TouchableOpacity>
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
