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

import LogoTitle from "./Logo";
import Generator from "./Generator";
import Input from "./Input";
import Picker from "./Picker";
import Cica from "./assets/images/test_cica2.jpg";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class HomeScreen extends Component {
  state = {
    nameOfApp: "kiscica",
    randoms: ["😶", "💥", "🍻", "🛸", "🐲", "🧼", "🦙", "🧟‍♀️", "🥬", "🧱"],
    emoji: "🐱",
    w: 100,
    h: 100,
    fontSize: 60,
    emojiOpacity: 1,
    marginTop: 180,
  };

  onAddRandom = () => {
    const random = Math.floor(Math.random() * this.state.randoms.length);
    this.setState(prevState => {
      return {
        emoji: this.state.randoms[random],
        fontSize: 60,
        marginTop: 180,
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
        {/* <ScrollView style={{ width: "100%" }}> */}
        <LogoTitle style={{ position: "fixed" }} />
        <TouchableWithoutFeedback onPress={this._onPress}>
          <View style={styles.emoji}>
            <Text
              style={{
                marginTop: this.state.marginTop,
                width: 4000,
                textAlign: "center",
                fontSize: this.state.fontSize,
                opacity: this.state.emojiOpacity,
                justifyContent: "center",
                alignItems: "center",
              }}>
              {this.state.emoji}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Generator add={this.onAddRandom} />
        {/* </ScrollView> */}
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
    alignSelf: "center",
    justifyContent: "center",
  },
  cica: {
    width: "100%",
    height: 300,
  },
});

export default HomeScreen;
