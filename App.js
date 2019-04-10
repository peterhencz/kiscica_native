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
  Image,
} from "react-native";

import Nav from "./src/Nav";
import Generator from "./src/Generator";
import Input from "./src/Input";
import Picker from "./src/Picker";
import ModalComponent from "./src/Modal";
import Cica from "./src/assets/images/test_cica2.jpg";

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
      <View style={styles.container}>
        <Nav name={this.state.nameOfApp} />

        <ScrollView style={{ width: "100%" }}>
          {/* <Input style={styles.input} />
          {/* <Picker /> */}
          {/* <Image source={Cica} style={styles.cica} resizeMode="contain" /> */}
          {/* <View style={styles.button} />
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
          <ModalComponent />
        </ScrollView>
        {/* <ListItem items={this.state.emoji} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#d4d7db",
  },
  emoji: {
    position: "absolute",
    alignSelf: "center",
  },
  cica: {
    width: "100%",
    height: 300,
  },
});

export default App;
