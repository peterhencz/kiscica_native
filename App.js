import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import LogoTitle from "./src/Logo";
import HomeScreen from "./src/Home";
import CreditScreen from "./src/Credit";

const AppNavigator = createBottomTabNavigator(
  {
    YOLO: { screen: HomeScreen },
    "🐱": CreditScreen,
  },
  {
    initialRouteName: "YOLO",
    tabBarOptions: {
      activeTintColor: "#f4baba",
      labelStyle: {
        fontSize: 16,
      },
      inactiveTintColor: "#f4baba",
    },
    defaultNavigationOptions: () => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        if (navigation.state.key === "YOLO") {
          navigation.navigate("YOLO");
        } else {
          defaultHandler();
        }
      },
    }),
  }
);

export default createAppContainer(AppNavigator);
