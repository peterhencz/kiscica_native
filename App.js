import React, { Component } from "react";
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Button,
  ScrollView,
} from "react-native";

import Nav from "./src/Nav";
import Generator from "./src/Generator";
import Input from "./src/Input";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends Component {
  state = {
    nameOfApp: "kiscica",
    randoms: ["😶", "💥", "🍻", "🛸", "🐲", "🧼", "🦙"],
    emoji: "🐱",
    w: 100,
    h: 100,
    fontSize: 60,
    emojiOpacity: 1,
    marginTop: 360,
  };

  onAddRandom = () => {
    const random = Math.floor(Math.random() * this.state.randoms.length);
    this.setState(prevState => {
      return {
        emoji: this.state.randoms[random],
        fontSize: 60,
        marginTop: 360,
      };
    });
  };

  _onPress = () => {
    LayoutAnimation.spring();
    this.setState({
      fontSize: this.state.fontSize + 20,
      marginTop: this.state.marginTop - 12,
    });
  };

  render() {
    return (
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.container}>
          <Nav name={this.state.nameOfApp} />
          <View>
            <Input style={styles.input} />
          </View>
          <View style={styles.button} />
          {/* <TouchableWithoutFeedback onPress={this._onPress}>
          <View style={styles.emoji}>
            <Text
              style={{
                marginTop: this.state.marginTop,
                width: 4000,
                textAlign: "center",
                fontSize: this.state.fontSize,
                opacity: this.state.emojiOpacity,
              }}>
              {this.state.emoji}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Generator add={this.onAddRandom} /> */}
          {/* <ListItem items={this.state.emoji} /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,

    alignItems: "center",
    backgroundColor: "#d4d7db",
  },
  emoji: {
    position: "absolute",
    alignSelf: "center",
  },
});

export default App;
