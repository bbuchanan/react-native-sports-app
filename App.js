import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Navigation } from "react-native-navigation";
import ScoreScreen from "./src/screens/ScoreScreen";
import Screen2 from "./src/screens/Screen2";
import startTabs from "./src/createNavTabs";

Navigation.registerComponent("sports-app.ScoreScreen", () => ScoreScreen);
Navigation.registerComponent("sports-app.Screen2", () => Screen2);

startTabs();
