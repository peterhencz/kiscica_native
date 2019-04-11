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
  {}
);

export default createAppContainer(AppNavigator);
