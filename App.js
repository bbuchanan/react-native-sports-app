import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Navigation } from "react-native-navigation";
import ScoreScreen from "./src/screens/ScoreScreen";
import StatsScreen from "./src/screens/StatsScreen";
import startTabs from "./src/createNavTabs";

Navigation.registerComponent("sports-app.ScoreScreen", () => ScoreScreen);
Navigation.registerComponent("sports-app.StatsScreen", () => StatsScreen);

startTabs();
