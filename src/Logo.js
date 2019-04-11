import React, { Component } from "react";
import { Image } from "react-native";
import Logo from "./assets/logo.png";

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={Logo}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          height: 50,
        }}
      />
    );
  }
}

export default LogoTitle;
