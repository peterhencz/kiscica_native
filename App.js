import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Generator from "./src/Generator";
import HomeScreen from "./src/Home";
import CreditScreen from "./src/Credit";

const AppNavigator = createBottomTabNavigator(
  {
    Play: HomeScreen,
    "🐱": CreditScreen,
  },
  {
    initialRouteName: "Play",
    tabBarOptions: {
      activeTintColor: "#f4baba",
      labelStyle: {
        fontSize: 16,
      },
      inactiveTintColor: "#f4baba",
    },
    defaultNavigationOptions: () => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        if (navigation.state.key === "Play") {
          navigation.navigate("Play");
        } else {
          defaultHandler();
        }
      },
    }),
  }
);

export default createAppContainer(AppNavigator);
