import React, { Component } from "react";
import { Image, ImageBackground } from "react-native";
import Logo from "./assets/logo.png";

class LogoTitle extends Component {
  render() {
    return (
      <ImageBackground
        source={Logo}
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 80,
          marginBottom: 20,
          width: 300,
          height: 100,
        }}
      />
    );
  }
}

export default LogoTitle;
